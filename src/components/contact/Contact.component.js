import React from 'react';

function Contact() {
    return (
        <div class="container">
                <div class="row row-content">
                    <div class="col-12">
                        <h1 class="hero-text">Send us your Questions</h1>
                        <hr />
                    </div>
                    <div class="col-md-10">
                        <form>
                            <div class="form-group row">
                                <label for="firstName" class="col-md-2 col-form-label" >First Name</label>
                                <div class="col-md-10">
                                    <input type="text" class="form-control" name="firstName" id="firstName" placeholder="First Name" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="lastName" class="col-md-2 col-form-label" >Last Name</label>
                                <div class="col-md-10">
                                    <input type="text"  class="form-control" name="lastName" id="lastName" placeholder="Last Name" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="areaCode" class="col-md-2 col-form-label" >Contact Tel.</label>
                                <div class="col-md-10">
                                    <input type="tel" class="form-control" name="telNum" id="telNum" placeholder="+1-999-555-1234" />
                                </div>
                                
                            </div>
                            <div class="form-group row">
                                    <label for="email" class="col-md-2 col-form-label" >Email</label>
                                    <div class="col-md-10">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Email Address" />
                                    </div>
                            </div>
                            <div class="form-group row">
                                    <label for="feedback" class="col-md-2 col-form-label">Your Question</label>
                                    <div class="col-md-10">
                                        <textarea  class="form-control" name="feedback" id="feedback" rows="8"></textarea>
                                    </div>
                             </div>
                             <div class="form-group row">
                                 <div class="offset-md-2 col-md-10">
                                    <button class="btn btn-outline-info" type="submit">Submit Question</button>
                                 </div>
                             </div>
                        </form>
                    </div>
               </div>
            </div>
    )
}

export default Contact;