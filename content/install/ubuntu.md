---
title: "How to install Ghost on Ubuntu"
date: "2018-10-01"
meta_title: "How to install & setup Ghost on Ubuntu 16.04 + 18.04"
meta_description: "A full production install guide for how to install the Ghost professional publishing platform on a production server running Ubuntu 16.04 or 18.04."
keywords:
    - setup
    - production
    - server
    - ubuntu
---

A full guide for installing, configuring and running Ghost on your Ubuntu **16.04** or **18.04** server, for use in production

## Overview

This the official guide for self-hosting Ghost using our recommended stack of Ubuntu 16.04 or 18.04. If you're comfortable installing, maintaining and updating your own software, this is the place for you. By the end of this guide you'll have a fully configured Ghost install running in production using MySQL.

This install is **not** suitable for [local use](/install/local/) or [contributing](/install/source/) to core.

<a class="sbox" href="https://www.digitalocean.com/docs/one-clicks/ghost/" target="_blank" rel="noopener">
    <div class="sbox-image">
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="65.2 173.5 180 180"><style>.st0{fill:#0080ff}</style><g id="XMLID_229_"><g id="XMLID_690_"><g id="XMLID_691_"><g id="XMLID_44_"><g id="XMLID_48_"><path id="XMLID_49_" class="st0" d="M155.2 351.7v-34.2c36.2 0 64.3-35.9 50.4-74-5.1-14.1-16.4-25.4-30.5-30.5-38.1-13.8-74 14.2-74 50.4H67c0-57.7 55.8-102.7 116.3-83.8 26.4 8.3 47.5 29.3 55.7 55.7 18.9 60.6-26 116.4-83.8 116.4z"/></g><path id="XMLID_47_" class="st0" d="M155.3 317.6h-34v-34h34z"/><path id="XMLID_46_" class="st0" d="M121.3 343.8H95.1v-26.2h26.2z"/><path id="XMLID_45_" class="st0" d="M95.1 317.6H73.2v-21.9h21.9v21.9z"/></g></g></g></g></svg>
    </div>
    <div class="sbox-content">
        <h4>Save time with our DigitalOcean One-Click Application</h4>
        <p>This is a detailed manual install guide, but we've also teamed up with our friends over at DigitalOcean to  automate nearly the entire process and have you up and running in just a few minutes 👉</p>
    </div>
</a>


## Prerequisites

This is the official and supported installation process for production. As much as we love hearing about Ghost being installed on a Raspberry Pi, we can’t recommend it or provide support for custom installs.

To install Ghost on production, use the following stack:

* Ubuntu 16.04 or Ubuntu 18.04
* MySQL
* NGINX (minimum of 1.9.5 for SSL)
* Systemd
* Node versions 8.9+ and 6.9+ only (read more)
* Minimum 1GB memory or added swap memory
* A non-root user for running `ghost` commands
* A registered domain name

Before getting started, it is recommended to setup an A record from the domain you use for your publication to the server’s IP address.

### Hosting

Ghost is written in Node.js and requires command line access to be installed. VPS style hosts are best suited for a production install of Ghost.

The following providers offer SSH (terminal) access and meet Ghost’s install requirements:


* [Digital Ocean](https://www.digitalocean.com/) - we recommend using the [official Ghost One-Click Application ](https://www.digitalocean.com/docs/one-clicks/ghost/)
* [Amazon EC2](https://aws.amazon.com/ec2/)
* [Google Cloud](https://cloud.google.com/compute/)
* [Linode](https://www.linode.com/)
* [Vultr](https://www.vultr.com/)
* [Dreamhost](https://www.dreamhost.com/hosting/vps/)

### SSL
SSL is highly recommended. Before starting the install, point your custom domain at your server and check that it’s resolving.

---

## Server Setup

This part of the guide will ensure all prerequisites are met for installing the Ghost CLI.

### Create a new user 👋

Open up your terminal and login to your new server as the root user:

```bash
ssh root@your_server_ip
```

Create a new user with regular account privileges and follow prompts to create a password:

```bash
adduser <user>
```

> Note: Using the user name `ghost` causes conflicts with the Ghost CLI, so it’s important to use an alternative name.

Add your new user to the superuser group to unlock administrative privileges:

```bash
usermod -aG sudo <user>
```

Log in as the new user:

```bash
su - <user>
```

At this point, we recommend following the [DigitalOcean tutorial](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04/) to perform additional security steps including public key authentication and firewall.


### Update packages

Ensure package lists and installed packages are up to date. Package lists:

```bash
sudo apt-get update
```

Installed packages:

```bash
sudo apt-get upgrade
```

Follow any prompts to enter the password you just created in the previous step.

### Install NGINX

Ghost uses an NGINX server and the SSL configuration requires NGINX 1.9.5 or higher. Install NGINX on your server:

```bash
sudo apt-get install nginx
```

If `ufw` was activated, the firewall allows HTTP and HTTPS connections. Open Firewall:

```bash
sudo ufw allow 'Nginx Full'
```


### Install MySQL

The Ghost CLI installs Ghost with MySQL by default and we recommend this database. Install MySQL:

```bash
sudo apt-get install mysql-server
```

#### MySQL on Ubuntu 18.04
If you’re running Ubuntu 18.04, a password is required to ensure MySQL is compatible with `Ghost-CLI`. This requires a few extra steps! To set a password, run:

```bash
sudo mysql
```

Then replace password with a password of your choice (keep the quotation marks):

```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

Exit  `mysql` with `quit` and login to your user again:

```bash
su - <user>
```


### Install Node.js

Node.js is an environment for JavaScript code. To get up and running with Ghost we recommend using Node 8. Read more about node versions.

#### Node requirements
If Node.js is already installed, ensure it’s installed system wide. Check where Node.js is installed with the command `which node`.

Node installations with `nvm` are problematic and should be uninstalled - see troubleshooting for further information.

Add the NodeSource APT repository for Node 8:

```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash
```

Install Node.js:

```bash
sudo apt-get install -y nodejs
```
---
## Install Ghost CLI

The Ghost CLI is a fully loaded tool to help you get Ghost installed and configured. It also makes keeping Ghost up to date more efficient for self hosted users 🎉

`ghost-cli` is an npm module that can be installed with `npm` or `yarn` on a production server using a non-root user:

```bash
sudo npm install -g ghost-cli@latest
```

```bash
sudo yarn global add ghost-cli@latest
```

Using @latest either installs or updates `ghost-cli`. You only have to remember the one command for both ✨

Installation of the `ghost-cli` grants global access to `ghost` in your terminal. Use `ghost help` for a list of commands.

---
## Installing Ghost

Once your server is correctly setup and the `ghost-cli` is installed, you can install Ghost. You’re on the home stretch!

This guide is the recommended setup. If you would prefer more fine-grained control, the CLI has flags and options that allow you to break down the steps and adjust what they do. The CLI documentation has further information for custom configuration, including:


* Installing Ghost with Sqlite3
* Permissions and certificates
* Ghost CLI commands

### Create a new installation folder
Create a new directory folder for your installation in terminal.

Replace `folder` with your site name:

```bash
sudo mkdir -p /var/www/{folder}
```

> Note: Installing Ghost in the `/root` or `home/{user}` folders results in a broken setup. Always use `/var/www/{folder}` which has the correct permissions.

Your user must own this new directory. Use the following command where `[user]` is the user you created during the server setup phase, and `folder` is the directory you just created:

```bash
sudo chown [user]:[user] /var/www/{folder}
```

Grant the correct permissions to your new installation folder:

```bash
sudo chmod 775 /var/www/ghost
```
Read more about [permission requirements](/docs/cli-knowledge-base#section-permissions/).

### Navigate to the new folder

In terminal, navigate to your new folder:

```bash
cd /var/www/ghost
```

Make sure this directory is empty with `ls` before proceeding to install.


### Run the install

Now you've made it this far, it's time to install Ghost with a single command 😀

```bash
ghost install
```

This installs and starts your blog in production mode using MySQL as the default database.

### Install questions

During install, the CLI will ask a number of questions to configure your site. The recommended configuration is supported. Custom configurations are not supported by the core Ghost team.

1. **Enter your blog URL Required**

Enter the URL your publication will be available at and include the protocol for HTTP or HTTPS. For example, `https://myblog.com`.

* Use HTTPS if your domain is already resolved, then choose `yes` later when prompted to set up SSL.
* Use HTTP if your domain is not setup for SSL. Run `ghost setup ssl` at any point once your domain is resolved.
* Use a domain name. Using the IP address of your server causes an error.


2. **Enter your MySQL hostname [localhost]** Required

This determines where your MySQL database can be accessed from. When MySQL is installed on the same server, use `localhost` (press `enter` to use the default value). If MySQL is installed on another server, enter the name manually and press `enter`.

3. **Enter your MySQL username** Required

If you already have an existing MySQL database enter the the username. Otherwise, enter `root`.

4. **Enter your MySQL password [hidden]** Required

Enter the password for the MySQL user you created.

5. **Ghost database name**

Enter the name of your database:

* If the database you enter does not exist and you provided your root credentials it will be created for you.
* If you pass a non-root MySQL username and password, this database must already exist and your user must have privileges.
* If you install multiple instances of ghost on your server you’ll need to specify a different database for each instance.


6. **Do you wish to set up a ghost MySQL user?** Recommended

If you provided your root MySQL user, Ghost CLI can create a custom MySQL user that can only access/edit your Ghost database. This is recommended, and Ghost-CLI takes care of this.

7. **Do you wish to set up NGINX?** Recommended

Sets NGINX up for your publication enabling it to be viewed by the outside world. Setting up NGINX manually is possible.

8. **Do you wish to set up SSL?** Recommended

The `Ghost-CLI` creates a valid SSL certificate using secure protocol with the Let's Encrypt certification service. Your domain must point to your server for SSL setup to complete. If you choose `no`, use `ghost setup ssl` at any time to setup a valid SSL certificate.

9. **Enter your email for SSL Required if SSL is setup**

SSL certification setup requires an email address so that you can be kept informed if there is any issue with your certificate including renewal.

10. **Do you wish to set up systemd?** Recommended

`systemd` is the recommended process manager tool to keep Ghost running smoothly. We recommend choosing `yes` but it’s possible to set up your own process management.

11. **Do you want to start Ghost?** Optional

Choosing `yes` runs Ghost. From here you can access your publication URL and the Ghost admin welcome page at `your-domain.com/ghost`. Start Ghost at any time with `ghost start`.


## What to do when an install fails

If an install goes horribly wrong, use `ghost uninstall` to remove it and try again. This is preferable to deleting the folder to ensure no artefacts are left behind.

If an install is interrupted or the connection lost, use `ghost setup` to restart the configuration process.

For troubleshooting and errors, use the site search and [FAQ section](/faq/) to find information about common error messages.


## What's next?

To summarise, in this section you:

* Setup your server with the required prerequisites
* Installed NGINX, MySQL and Node.js
* Installed and learned about the Ghost CLI tool
* Generated a new Ghost site using the Ghost CLI tool
* Configured your site and started Ghost

Congrats! Now you can start customising your brand new Publication – check out the [tutorials](/tutorials/) and the [API documentation](/api/).
