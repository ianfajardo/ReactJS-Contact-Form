var ContactForm = React.createClass({
	displayName: "ContactForm",

	render: function () {
		return React.createElement(
			"form",
			{ action: "", className: "form-horizontal" },
			React.createElement(
				"h1",
				null,
				"Contact Me!"
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "inputName3", className: "col-sm-2 control-label" },
					"Name"
				),
				React.createElement(
					"div",
					{ className: "col-sm-10" },
					React.createElement("input", { type: "text", className: "form-control", id: "inputName3", placeholder: "Name" })
				)
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "inputEmail3", className: "col-sm-2 control-label" },
					"Email"
				),
				React.createElement(
					"div",
					{ className: "col-sm-10" },
					React.createElement("input", { type: "email", className: "form-control", id: "inputEmail3", placeholder: "Email" })
				)
			),
			React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					{ htmlFor: "inputMessage3", className: "col-sm-2 control-label" },
					"Message"
				),
				React.createElement(
					"div",
					{ className: "col-sm-10" },
					React.createElement("textarea", { className: "form-control", id: "inputMessage3", rows: "3", placeholder: "Lorem Ipsum Dolor..." })
				)
			),
			React.createElement(
				"button",
				{ type: "submit", className: "btn btn-primary pull-right" },
				"Send Message"
			),
			React.createElement("div", { className: "clearfix" })
		);
	}
});

ReactDOM.render(React.createElement(ContactForm, null), document.getElementById("contactForm"));