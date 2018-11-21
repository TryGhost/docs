---
title: "How to install Ghost on Debian Testing"
date: "2018-11-21"
meta_title: "How to install & setup Ghost on Debian Testing"
meta_description: "A rolling deployment installation guide for the Ghost professional publishing platform using a staged environment that runs Debian Testing."
keywords:
    - setup
    - staging
    - server
    - debian
    - rolling
    - deployment
    - environment
---

A rolling guide for installing, configuring and running Ghost on your Debian **Testing** environment, for use in staged deployments

## Overview

This is an unofficial guide for self-hosting Ghost on top of the Debian Testing stack. If you're comfortable installing, maintaining and updating your own software, this is the place for you. By the end of this guide you'll have a fully configured Ghost install running in a staged environment using MySQL.

This install is **not** suitable for [production use](/install/ubuntu/), [local use](/install/local/) or [contributing](/install/source/) to core.


## Prerequisites

The unofficial, staged installation requires the following stack:

* Debian
* NGINX (minimum of 1.9.5 for SSL)
* A [supported version](/faq/node-versions/) of [Node.js](https://nodejs.org)
* MySQL 5.5, 5.6, or 5.7 (*not* >= 8.0)
* Systemd
* A server with at least 1GB memory
* A registered domain name

Before getting started you should set an **A record** from the domain you plan to use, pointing at the server’s IP address and ensure that it's resolving correctly. This must be done in advance so that SSL can be properly configured during setup.


---


## Server Setup

This part of the guide will ensure all prerequisites are met for installing the Ghost-CLI.

Open up your terminal and login to your new server as the root user:

```bash
# Login via SSH
ssh root@<your_server_ip>
```

### Switch to Testing

If you're not already on the Testing (rolling) stream for Debian, change the sources.list in /etc/apt/sources.list

```bash
#Main Debian package repositories
deb http://deb.debian.org/debian/ testing main contrib non-free
deb-src http://deb.debian.org/debian/ testing main contrib non-free

#Main Debian package updates repositories
deb http://deb.debian.org/debian/ testing-updates main contrib non-free
deb-src http://deb.debian.org/debian/ testing-updates main contrib non-free

#Main Debian package security updates repositories
deb http://deb.debian.org/debian-security/ testing/updates main contrib non-free
deb-src http://deb.debian.org/debian-security/ testing/updates main contrib non-free
```

Update the package list and then upgrade to the Debian Testing stream. Follow all prompts to finish the switch (this may require a reboot and relogin). You can type 'reboot' in the terminal (after you've performed the actions below) to manually reboot your system.

```bash
# Update package list
apt-get update

# Upgrade to the Testing stream
apt-get dist-upgrade
```

To remove any residual packages that are no longer needed:

```bash
# Remove packages that are no longer needed.
apt autoremove
```

### Create a new user

Debian may not come with sudo. To install sudo:

```bash
# Install the superuser do (sudo) software.
apt install sudo
```

Next, create a unique user.

```bash
# Create a new user and follow prompts
adduser <user>
```

> Note: Using the username `ghost` causes conflicts with the Ghost-CLI, so it’s important to use an alternative name.

```bash
# Add user to superuser group to unlock admin privileges
usermod -aG sudo <user>

# Then log in as the new user
su - <user>
```

### Install NGINX

Ghost uses an NGINX server and the SSL configuration requires NGINX 1.9.5 or higher.

```bash
# Install NGINX
sudo apt install nginx
```

If `ufw` was activated, the firewall allows HTTP and HTTPS connections. Open Firewall:

```bash
sudo ufw allow 'Nginx Full'
```

### Install MySQL

Next, you'll need to install MySQL to be used as the database.

```bash
# Fetch the repository from the website download link at https://dev.mysql.com/downloads/repo/apt/
sudo wget https://dev.mysql.com/get/mysql-apt-config_0.8.10-1_all.deb

# Install the repo for use
sudo dpkg -i mysql-apt-config_0.8.10-1_all.deb
```

> Note: Add the newest Debian version to the unsupported system (the list starts from oldest to newest systems). Add the MySQL Server & Cluster product. Add the newest MySQL version found in the prerequisites section of this guide. Select the 'ok' option when complete.

Get the updated repository list and install MySQL.

```bash
# Update the repo list
sudo apt update

# Install the MySQL community server first
sudo apt install mysql-community-server

# Install the MySQL server
sudo apt install mysql-server
```

#### Setting up MySQL with a user administrator account (optional)

Create a MySQL User that will administer the database.

```bash
# Login to MySQL as root (enter your root password when prompted)
sudo mysql -u root -p

# Create a new user administrator
CREATE USER '<user>' IDENTIFIED BY '<password>';

# Exit the MySQL shell
QUIT;
```


### Install Node.js

You will need to have a [supported version](/faq/node-versions/) of Node installed system-wide in the manner described below. If you have a different setup, you may encounter problems.

Install curl and use it to install Node.js

```bash
# Install the curl software
sudo apt install curl

# Add the NodeSource APT repository for Node 8
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash

# Install Node.js
sudo apt install -y nodejs
```

---

## Install Ghost-CLI

[Ghost-CLI](/api/ghost-cli/) is a commandline tool to help you get Ghost installed and configured for use, quickly and easily. The npm module can be installed with `npm` or `yarn`.

```bash
sudo npm install ghost-cli@latest -g
```

Once installed, you can always run `ghost help` to see a list of available commands.


---


## Install Ghost

Once your server is correctly setup and the `ghost-cli` is installed, you can install Ghost. The following steps are the recommended setup. If you would prefer more fine-grained control, the CLI has [flags and options](/api/ghost-cli/) that allow you to break down the steps and customise exactly what they do. 

> Note: Installing Ghost in the `/root` or `home/<user>` directories results in a broken setup. Always use a custom directory with properly configured permissions.


### Create a directory
Create a directory for your installation, then set the owner and permissions.

```bash
# We'll name ours 'ghost' in this example; you can use whatever you want
sudo mkdir -p /var/www/ghost

# Replace <user> with the name of your user who will own this directory
sudo chown <user>:<user> /var/www/ghost

# Set the correct permissions
sudo chmod 775 /var/www/ghost

# Then navigate into it
cd /var/www/ghost
```


### Run the install process

Now you've made it this far, it's time to install Ghost with a single command

```bash
ghost install
```

### Install questions

During install, the CLI will ask a number of questions to configure your site.

#### Blog URL

Enter the exact URL your publication will be available at and include the protocol for HTTP or HTTPS. For example, `https://example.com`. If you use HTTPS, Ghost-CLI will offer to set up SSL for you. Using IP addresses will cause errors.


#### MySQL hostname

This determines where your MySQL database can be accessed from. When MySQL is installed on the same server, use `localhost` (press <kbd>Enter</kbd> to use the default value). If MySQL is installed on another server, enter the name manually.

#### MySQL username / password

If you already have an existing MySQL database enter the the username. Otherwise, enter `root`. Then supply the password for your user.


#### Ghost database name

Enter the name of your database. It will be automatically set up for you, unless you're using a **non**-root MySQL user/pass. In that case the database must alreay exist and have the correct permissions. 

#### Set up a ghost MySQL user? <small>(Recommended)</small>

If you provided your root MySQL user, Ghost-CLI can create a custom MySQL user that can only access/edit your new Ghost database and nothing else.

#### Set up NGINX? <small>(Recommended)</small>

Sets NGINX up automatically enabling your site to be viewed by the outside world. Setting up NGINX manually is possible, but why would you choose a hard life?

#### Set up SSL? <small>(Recommended)</small>

If you used an `https` Blog URL and have already pointed your domain to the right place, Ghost-CLI can automatically set up SSL for you using [Let's Encrypt](https://letsencrypt.org). Alternatively you do this later by running `ghost setup ssl` at any time.

**Enter your email**<br>
SSL certification setup requires an email address so that you can be kept informed if there is any issue with your certificate, including during renewal.

#### Set up systemd? <small>(Recommended)</small>

`systemd` is the recommended process manager tool to keep Ghost running smoothly. We recommend choosing `yes` but it’s possible to set up your own process management.

#### Start Ghost?

Choosing `yes` runs Ghost, and makes your site work.


---


## Future maintenance

Once Ghost is properly set up it's important to keep it properly maintained and up to date. Fortunately, this is relatively easy to do using Ghost-CLI. Run `ghost help` for a list of available commands, or explore the full [Ghost-CLI documentation](/api/ghost-cli/).

---


## What to do if the install fails

If an install goes horribly wrong, use `ghost uninstall` to remove it and try again. This is preferable to deleting the folder to ensure no artefacts are left behind.

If an install is interrupted or the connection lost, use `ghost setup` to restart the configuration process.

For troubleshooting and errors, use the site search and [FAQ section](/faq/errors/) to find information about common error messages.


---

## What's next?

You're all set! Now you can start customising your site. Check out our range of [tutorials](/tutorials/) or the Ghost [API documentation](/api/) depending on which page of this choose-your-own-adventure experience you'd like to subject yourself to next.
