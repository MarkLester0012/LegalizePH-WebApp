<template>
  <div id="app">
    <header>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">
            <a class="navbar-brand" href="#"><img src="src/assets/img/logo.png" alt="LegalizePH"></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link home" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">about</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#features">features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#download">download</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#pricings">pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contact">contact</a>
                  </li>
                
              </ul>
            </div>
        </div>
          </nav>
    </header>

    <!-- Hero section -->
    <section id="hero">

        <div class="container">

            <div class="row main-hero-content">

                    <div class="col-md-6">
                        <h1>FIND THE RIGHT LAWYER TO DEFEND YOU</h1>
                        <p>Find the best legal service providers near you with just few easy steps.</p>
                        <div class="hero-buttons">
                            <a href="#" class="btn btn-outline-primary btn-white">register</a>
                            <a href="#" class="btn btn-outline-primary btn-white2">try now</a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="image-box">

                        </div>
                    </div>

            </div>

        </div>

    </section>

     <!-- About section -->
     <section id="about">

        <div class="container">

            <div class="row section-title justify-content-center">
                <h2 class="section-title-heading">about LegalizePH</h2>
            </div>

            <div class="row justify-content-center text-center mt-5">

                <div class="col-md-4">
                    <i class="fas fa-gavel fa-3x mb-2"></i>
                    <h3>legal services in your hands</h3>
                    <p>Find the best lawyer that offers the legal services you need by using LegalizePH web and mobile application.</p>
                </div>
                <div class="col-md-4">
                    <i class="fas fa-calendar fa-3x mb-2"></i>
                    <h3>manage your appointments</h3>
                    <p>Manage your schedules and requirements easier by using the LegalizePH appointment manager.</p>
                </div>
                <div class="col-md-4">
                    <i class="fas fa-search fa-3x mb-2"></i>
                    <h3>filter-based search funcion</h3>
                    <p>Optimize your searches by using the LegalizePH filter feature to find the lawyer that suit your preferences.</p>
                </div>

            </div>

        </div>

     </section>

     <!-- Feature section -->
     <section id="features">

        <div class="container">

            <div class="row section-title justify-content-center">
                <h2 class="section-title-heading">app features</h2>
            </div>

            <div class="row mt-5">
                <div class="col-md-4">              
                    <div class="feature-block">
                        <img class = "feature1">
                        <h3 class="text-center">mobile friendly</h3>
                        <p>LegalizePH is not only available through the web but also on mobile phones. More features are added in the 
                            mobile app to help users interact with their chosen lawyers with more convenience..</p>              
                    </div>    
                    <div class="feature-block mt-5">
                        <img class = "feature2">
                        <h3 class="text-center">appointment manager</h3>
                        <p>Manage appointments with your lawyer using the appointment manager feature. This feature provides its 
                            users with schedules and notifications provided by their chosen lawyer.</p>
                    </div>
                </div>
                <div class="col-md-4 device">
                </div>
                <div class="col-md-4">
                    <div class="feature-block">
                        <img class = "feature3">
                        <h3 class="text-center">in-app messaging</h3>
                        <p>The mobile application features in-app messaging to improve the communication between the users and their chosen lawyer.</p><br><br>
                    </div>
                    <div class="feature-block mt-5">
                        <img class = "feature4">
                        <h3 class="text-center">map api</h3>
                        <p>Find the directions to your lawyer a lot easier with the embedded google map in the mobile application. Directions 
                            to and from your location is shown to guide you to your lawyer.</p>
                    </div>
                </div>

            </div>


        </div>

    </section>

    <!-- Download section -->
    <section id="download">

        <div class="container">

                <div class="row download-title justify-content-center">
                    <h2>download our app</h2>
                    <p>Download our application now and let us help you find the right lawyer to defend you. Enjoy more features within our application including appointment manager, in-app messaging, and many more.</p>
                    <div class="download-btns">
                        <a href="https://youtu.be/pPg4rHU2YKE?t=36" target="_blank"><i class="fab fa-android"></i> Play Store</a>
                    </div>
                </div>

        </div>

    </section> 
    
    
    <!-- Pricing section -->
    <section id="pricing">

        <div class="container">

            <div class="row section-title justify-content-center">
                <h2 class="section-title-heading">upgrade plans</h2>
            </div>

            <div class="row justify-content-center">

                <div class="col-md pricing-table">

                    <div class="table-header text-center">
                        <h4>basic</h4>
                        <p>₱100/month</p>
                    </div>

                    <div class="table-content">
                        <ul>
                            <li>lawyer account</li>
                            <li>up to 5 services </li>
                            <li>up to 3 specialized cases</li>
                            <li>5 active appointments</li>
                        </ul>
                    </div>

                    <div class="table-footer text-center">
                        <a href="#">upgrade now</a>
                    </div>

                </div>

                <div class="col-md pricing-table">

                    <div class="table-header text-center">
                        <h4>medium</h4>
                        <p>₱140/month</p>
                        <img class = "sale">
                    </div>

                    <div class="table-content">
                        <ul>
                            <li>lawyer account</li>
                            <li>up to 10 services</li>
                            <li>up to 8 specialized cases</li>
                            <li>10 active appointments</li>
                        </ul>
                    </div>

                    <div class="table-footer text-center">
                        <a href="#">order now</a>
                    </div>

                </div>

                <div class="col-md pricing-table">

                    <div class="table-header text-center">
                        <h4>large</h4>
                        <p>₱200/month</p>
                    </div>

                    <div class="table-content">
                        <ul>
                            <li>lawyer account</li>
                            <li>up to 20 serices</li>
                            <li>up to 12 specialized cases</li>
                            <li>20 active appointments</li>
                        </ul>
                    </div>

                    <div class="table-footer text-center">
                        <a href="#">order now</a>
                    </div>

                </div>

            </div>

        </div>

    </section> 


    <!-- Contact section -->
    <section id="contact">

        <div class="container">

            <div class="row section-title justify-content-center">
                <h2 class="section-title-heading">get in touch</h2>
            </div>

            <div class="row mt-5">

                <div class="col-md-8">
                    <div class="contact-form">
                        <form action="#">
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Enter your name">
                                </div>
                                <div class="col">
                                    <input type="email" class="form-control" placeholder="Enter your email address">
                                </div>
                            </div>
                            <div class="form-group mt-4">
                                <textarea class="form-control" rows="10" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-contact mt-4">Send</button>
                        </form>
                    </div>
                </div>

                <div class="col-md-4">

                    <div class="address">
                        <h3>Address</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatibus quae ea nihil 
                            tempora nemo voluptatum praesentium soluta nam?</p>
                    </div>
                    <div class="contact-details">
                        <ul class="fa-ul">
                            <li><span class="fa-li"><i class="fas fa-mobile-alt"></i></span>+1 555 555 555</li>
                            <li><span class="fa-li"><i class="fas fa-map-marker-alt"></i></span>272 Private 7530 Rd, Call, TX, 75933</li>
                            <li><span class="fa-li"><i class="fas fa-paper-plane"></i></span>info@yourcompany.com</li>
                        </ul>
                    </div>

                </div>

            </div>


        </div>

    </section> 

    <!-- Footer section -->
    <footer id="footer">

        <div class="container">

            <div class="row d-flex flex-column align-items-center">

                <div class="footer-logo">
                    <img class="footer-logo">
                </div>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <div class="copyright text-center">
                    <p>Copyright 2020</p>
                </div>

            </div>

        </div>

    </footer>

   
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
