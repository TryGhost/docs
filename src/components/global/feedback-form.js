import React from 'react'
import PropTypes from 'prop-types'

import { Spirit } from '../../components/spirit-styles'

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
        .join(`&`)
}

class FeedbackForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSucces: false,
            error: ``
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    handleError = (error) => {
        this.setState(() => ({ error: error.message}))
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch(`/`, {
            method: `POST`,
            headers: { "Content-Type": `application/x-www-form-urlencoded` },
            body: encode({
                "form-name": form.getAttribute(`name`),
                "feedback-type": `Feedback`,
                "page": this.props.location.pathname,
                "email": this.state.email,
                "message": this.state.message,
            }),
        })
            .then(() => this.setState((state) => ({ showSucces: !state.showSucces })))
            .catch(error => this.handleError(error))
    }

    render() {
        if (this.state.showSucces) {
            return (
                <div className="relative mw-content center pa15 pt10 bg-white shadow-2 mt10 mb10 br4">
                    <h4 className={Spirit.h4 + `mt1 nudge-top--2`}>Thanks for the feedback! 🤗</h4>
                    <p className={`${Spirit.small} mt1 midgrey`}>Your message has been successfully delivered to our team, who will review your suggestions shortly. If we have any followup questions we&apos;ll be in touch!</p>
                </div>
            )
        } else if (this.state.error) {
            return (
                <div className="relative mw-content center pa15 pt10 bg-white shadow-2 mt10 mb10 br4">
                    <h4 className={Spirit.h4 + `mt1 nudge-top--2 red`}>Rats. Something went wrong 😑</h4>
                    <p className={`${Spirit.small} mt1 midgrey`}>You can try again if you like, or skip this form entirely and just send us an email directly at <a href="mailto:hello@ghost.org" className="link blue">hello@ghost.org</a>. Sorry for the trouble!</p>
                </div>
            )
        } else {
            return (
                <div className="relative mw-content center pa15 pt10 bg-white shadow-2 mt10 mb10 br4">
                    <h4 className={Spirit.h4 + `mt1 nudge-top--2`}>Help us improve this page</h4>
                    <p className={`${Spirit.small} mt1 midgrey`}>Please let us know what&apos;s working and what&apos;s not with this page.</p>
                    <form
                        name="feedback"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={this.handleSubmit}
                    >
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        <input type="hidden" name="form-name" value="feedback" />
                        <p hidden>
                            <label>
                                Don’t fill this out:{` `}
                                <input name="bot-field" onChange={this.handleChange} />
                            </label>
                        </p>
                        <div className="flex items-center">
                            <select
                                name="feedback-type"
                                className="db ba b--whitegrey whitney pa3 bg-white w-50 h10 mt4 mr4 middarkgrey"
                                onChange={this.handleChange}
                            >
                                <option>Feedback</option>
                                <option>Issue</option>
                                <option>Typo</option>
                                <option>Praise</option>
                                <option>Other</option>
                            </select>
                            <input
                                name="email"
                                type="email"
                                className="w-50 f8 pa3 ba fw4 whitney form-text br3 db lh-1-0 bg-white ba b--whitegrey mt4 middarkgrey"
                                placeholder="Email..."
                                autoCapitalize="none"
                                autoComplete="off"
                                autoCorrect="off"
                                spellCheck="false"
                                required="required"
                                onChange={this.handleChange}
                            />
                        </div>
                        <textarea
                            name="message"
                            className="w-100 f8 pa3 h40 whitney db bg-white br3 ba b--whitegrey mt4 form-text middarkgrey"
                            placeholder="Your message..."
                            required="required"
                            onChange={this.handleChange}
                        />
                        <button className="blue mt4 pa3 pl7 pr7 bg-lgr-blue white bn br3 whitney f8" type="submit">Send</button>
                    </form>
                </div>
            )
        }
    }
}

FeedbackForm.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}
export default FeedbackForm
