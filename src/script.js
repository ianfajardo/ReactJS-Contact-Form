var ContactForm = React.createClass({
	render: function() {
		return (
			<form action="" className="form-horizontal">
				<h1>Contact Me!</h1>
				<div className="form-group">
			    <label htmlFor="inputName3" className="col-sm-2 control-label">Name</label>
			    <div className="col-sm-10">
			      <input type="text" className="form-control" id="inputName3" placeholder="Name" />
			    </div>
			  </div>
			  <div className="form-group">
			    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
			    <div className="col-sm-10">
			      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
			    </div>
			  </div>
			  <div className = "form-group">
			  	<label htmlFor="inputMessage3" className="col-sm-2 control-label">Message</label>
			  	<div className="col-sm-10">
			  		<textarea className="form-control" id="inputMessage3" rows="3" placeholder="Lorem Ipsum Dolor..."></textarea>
			  	</div>
			  </div>
			  <button type="submit" className="btn btn-primary pull-right">Send Message</button>
			  <div className="clearfix"></div>
			</form>
		);
	}
});

ReactDOM.render(
  <ContactForm />,
  document.getElementById("contactForm")
);