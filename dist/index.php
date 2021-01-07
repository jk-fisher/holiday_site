<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Le Petit Cottage, France, available to book for holidays to the Dordogne region.">
        <meta name="keywords" content="Le Petit Cottage, Dordogne, France, holiday, Cottage">
        <title>Le Petit Cottage</title>
        <link rel="icon" href="./img/icon_01.png">
        <link rel="stylesheet" href="./CSS/home refactor.css">
        <link rel="stylesheet" href="./CSS/modal.css">
        <link rel="stylesheet" href="./CSS/calendar.css">
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,344;1,100;1,300;1,400&family=Mulish:wght@300&family=Raleway:wght@500&display=swap" rel="stylesheet">   
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap" rel="stylesheet">
        <!-- icon links -->
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <header>
        <nav class="nav-container">
            <div class="logo">
                <a href="./index.php"><h1>Le<br>Petit Cottage</h1></a>
            </div>
            <ul class="topnav" id="myTopnav">
                <li class="active"><a href="./index.php">Home</a></li>
                <li><a href="#property-details">Property Details</a></li>
                <li><a href="#contact">Availability & Pricing</a></li>
                <li><a href="#location">Location</a></li>
                <li><a href="attractions.html">Things To Do</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
                <a href="javascript:void(0);" class="icon">
                    <i class="fa fa-bars"></i></a>
            </ul>
        </nav>
    </header>
    <body>
        <div class="banner">
            <h2>Le Petit Cottage, Dordogne, France</h2> 
        </div>
        <div class="content-container">
            <div class="landing-info">We welcome visitors to stay in your own private cottage at our little farm. The chickens and sheep will greet you in the mornings and you can have fresh laid eggs for breakfast with jam from our own fruit trees and, in season, produce from the garden. If you fancy relaxing by a tranquil lake we have a private millpond just two kilometres away. Plenty of fish if you bring your rod, (or borrow one of ours) or just somewhere shady to read a book on a sunny day.
                <div class="stars">
                    <br><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>
                    <p><span class="total-review">4.5</span> (60 reviews)</p></div>
                    <a href="#reviews">See Reviews</a>
            </div>
            <a href="#contact" id="checkAvailabilityBtn">Request to book now!</a>
            <!-- <button id="checkAvailabilityBtn">Request to book now!</button> -->
            <div class="template amenities cntr">
                <a name="property-details"></a>
                <div class="cottage">
                    <p>Entire Cottage</p><i class="fa fa-home" style="font-size:36px"></i><br>
                </div>
                <div class="row">
                    <div class="amenities-col">
                        4 Guests<i class="fa fa-group" style="font-size:34px"></i>
                    </div>
                    <div class="amenities-col">
                        1 Bedroom<i class="fa fa-hotel" style="font-size:34px"></i>
                    </div>
                    <div class="amenities-col">
                        2 Beds<i class="fa fa-hotel" style="font-size:34px"></i>
                    </div>
                    <div class="amenities-col">
                        1 Bathroom<i class="fa fa-bathtub" style="font-size:34px"></i>
                    </div>
                </div>
                <br><br><hr>
                <!-- modal button -->
                <button id="amenities-btn">Show All Amenities</button>
                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <h3>Amenities</h3>
                        <div class="modal-grid">
                            <div class="col1">
                                <ul>
                                    <li>Wifi</li>
                                    <li>Indoor fireplace</li>
                                    <li>Washing Machine</li>
                                    <li>TV</li>
                                    <li>Iron</li>
                                    <li>Essentials - including towels, bed sheets, soap and toilet paper</li>
                                    <li>Heating</li>
                                    <li>Hot water</li>
                                </ul><br>
                                    <li><b>Facilities</b></li>
                                    <li>Free parking on premises</li>
                                    <li>Pool</li>
                                    <li>Free on-street parking</li>
                                </ul>
                            </div>
                            <div class="col2">
                                <ul>
                                    <li><b>Dining</b></li>
                                    <li>Kitchen space where guests can cook their own meals</li>
                                    <li>Cooking basics - including Pots, pans, oil, salt & pepper</li>
                                    <li>Coffee maker</li>
                                    <li>Microwave</li>
                                    <li>Stove</li>
                                    <li>Dishes & silverwear</li>
                                    <li>Oven</li>
                                    <li>Refrigerator</li>
                                    <li>Dishwasher</li>
                                </ul>
                                <ul><br>
                                    <li><b>Family features</b></li>
                                    <li>Childrens tableware/High Chair</li>
                                    <li>Travel cot</li>
                                    <li>Bath</li>
                                </ul>
                            </div>
                            <div class="col3">
                                <ul>
                                    <li><b>Guest Access</b></li>
                                    <li>Private entrance</li>
                                    <li>Greeted upon arrival</li><br>
                                    <li><b>Logistics</b></li>
                                    <li>Luggage drop off for guests convenience if arriving early or departing late</li><br>
                                    <li><b>Bed and bath</b></li>
                                    <li>Shampoo</li>
                                    <li>Hair dryer</li>
                                    <li>Hangers</li>
                                    <li>Shower Gel</li>
                                    <li>Extra pillows/blankets</li>
                                    <li>Bed linen</li><br>
                                    <li><b>Outdoor</b></li>
                                    <li>Garden/backyard</li>
                                    <li>BBQ grill</li><br>
                                    <li><b>Location</b></li>
                                    <li>Private lake access</li><Br>
                                    <li><b>Safety features</b></li>
                                    <li>Smoke alarm</li>
                                    <li>Carbon monoxide alarm</li>
                                    <li>Fire extinguisher</li>
                                    <li>First aid kit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="color-block"></div>
            <section class="template">
                <div class="property-description">
                    <h3>Property Description</h3>
                    <p>We have restored an ancient bread oven on our little farm to make a cosy retreat in a quiet corner of the Dordogne. The kitchen and bathroom combine modern fittings with ancient beams and stonework while the comfortable sitting room features a log burning stove and the original paddle for the old bread oven, found when we started the renovation work.
                        It is an ideal base for an active holiday (many options nearby) but the nightlife consists of sharing the stars with the owls and a bottle of wine.<span id="dots">..</span>
                        <br><br>
                        <span id="more"><br>
                        We welcome visitors to our little farm. The chickens and sheep will greet you in the mornings and you can have fresh laid eggs for breakfast with jam from our own fruit trees and, in season, produce from the garden.
                        If you fancy relaxing by a tranquil lake we have a millpond just two kilometres away. Plenty of fish if you bring your rod, (or borrow one of ours) or just somewhere shady to read a book on a sunny day.
                        <br><br>
                        <br>
                        You have your own access to the cottage with space to park your car just outside, so you can come and go as you choose. We have room for a motor home or caravan on a flat field given advanced notice. There is a little garden for a spot of sunbathing, or a hammock in the woods where you can relax in real rural tranquility.
                        If you enjoy fishing we have our own lake two km from the cottage, really good for family friendly fishing.
                        <br><br>
                        <br>
                        Please note...this is not a good holiday for anyone keen on discos and nightlife, or who is irritated by birdsong and farmyard noises!</span>
                    </p>
                        <button value="button text" id="moreBtn">Read more  <i class='fas fa-angle-down'></i></button>
                </div>
                <div class="img-container">
                    <img class="property-img" src="./img/img_05.jpg" alt="La Petit Cottage - Kitchen" style="width:100%;cursor:pointer">
                    <a href="./gallery.html" id="view-gallery-btn">View Image Gallery <i class="material-icons">&#xe42a;</i></a>
                </div>
                <div class="image-cards" id="imageCards">
                    <img class="img-item1" src="./img/img_08.jpg" alt="La Petit Cottage - Bathroom" style="width:100%;cursor:pointer">
                    <img class="img-item2" src="./img/img_07.jpg" alt="La Petit Cottage - Bedroom" style="width:100%;cursor:pointer">
                    <img class="img-item3" src="./img/img_12.jpg" alt="La Petit Cottage - Seasonal Produce From The Farm" style="width:100%;cursor:pointer">
                </div>
            </section>
            <div class="color-block"></div>
            <section class="template price">
                <div class="calendar">
                    <div class="month-year">
                        <div class="prev">
                            <i class="fas fa-angle-left prev-month"></i>
                            <i class="fas fa-angle-left prev-year"></i>
                        </div>
                        <div class="date">
                            <div class="month"></div>
                            <div class="year"></div>
                            <div class="selected-date"></div>
                        </div>
                        <div class="next">
                            <i class="fas fa-angle-right next-month"></i>
                            <i class="fas fa-angle-right next-year"></i>
                        </div>
                    </div>
                    <div class="weekdays">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div class="days"></div>
                </div>
                <div class="date-enquiry"></div>
            </section>
            <div class="color-block"></div>
            <div class="cntr"><a name="reviews"></a></div>
            <section class="reviews">
                <H3>Reviews</H3><br>
                <div class="review-stars">
                    <br><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>
                    <p><span class="total-review">4.5</span> (60 reviews)</p>
                </div>
                <div class="quote"><br>
                    <p><i class="quotation-mark fas fa-quote-left"></i> We can’t rate this cottage highly enough! It is the most beautiful little getaway for anyone wanting to escape the hustle of a busy life...The little cottage has absolutely everything you could need for a lovely stay and it’s been renovated to such a high standard. Will definitely be recommending to our friends and family. <i class="quotation-mark fas fa-quote-right"></i></p>
                </div>
                <div class="wrapper">
                    <div class="review-container no1"><p><b><i class='fas fa-user' style='font-size:24px'></i> Sarah<br>
                        November 2019<br></b>
                        The little cottage is cosy but with lovely modern touches like a very large bathroom with a large waterfall shower. It have everything you could wish for all done with so much thought!</p>
                        <!-- <a href="./reviews.html">See All Reviews</a> -->
                    </div>
                    <div class="review-container no2"><p><b><i class='fas fa-user' style='font-size:24px'></i> Julie<br>
                        September 2018<br></b>
                        A perfect (not so little) getaway. Jude and Nick have beautifully and tastefully restored “Le petite cottage” to an exceptional standard. 
                        Nick very kindly met us in the nearby village and we followed him to the spotlessly clean cottage...</p>
                        <!-- <a href="./reviews.html">See All Reviews</a> -->
                    </div>
                </div>
            </section>
            <div class="color-block"></div>
            <div class="cntr"><a name="location"></a></div>
            <section class="template">
                <h3>Location</h3><br>
                <div class="location-wrapper">
                    <div class="location">
                        <div class="location-info"><h3 class="subtitle">Payzac, Aquitaine-Limousin-Poitou-Charentes, France.</h3><br><br>
                            <a href="https://www.google.com/maps/place/24270+Payzac,+France/@45.4199706,1.1590152,12z/data=!3m1!4b1!4m5!3m4!1s0x47ff32cb5d8b3ba3:0x406651748180060!8m2!3d45.400129!4d1.2185729" target="_blank" rel="noreferrer noopener" class="viewOnMap-btn">View On Map</a>
                        </div>
                        <div class="find-us">
                            <p>Our neighbourhood is a friendly farming community, where people still have time to stop and talk. Visiting le petit cottage is like stepping back fifty years in time to when life was kinder to us all.
                                <H4>Getting around</H4>
                                Unfortunately there is no public transport passing through the village so you will need your own transport</p>
                            <H4>How To Find Us</H4><p>Due to our remote, rural location, people often struggle to find us as our address will not show up on google maps - excellent if you want a secluded holiday off the grid! Please travel to Saint-Mesmin, look out for the beautifully painted water tower and we will come to meet you.  
                                </p>
                        </div>       
                    </div>
                    <div class="img_37">
                        <img src="./img/img_37.jpg" alt="Savignac Ledrier Watertower" style="width:100%;cursor:pointer">    
                    </div>
                </div>
            </section>
            <div class="color-block"></div>
            <?php
            $statusMsg = '';
            $msgClass = '';
            if(isset($_POST['submit'])){
                // Get the submitted form data
                $email = $_POST['email'];
                $name = $_POST['name'];
                $subject = $_POST['subject'];
                $message = $_POST['message'];
                
                // Check whether submitted data is not empty
                if(!empty($email) && !empty($name) && !empty($subject) && !empty($message)){
                    
                    if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
                        $statusMsg = 'Please enter your valid email.';
                        $msgClass = 'errordiv';
                    }else{
                        // Recipient email
                        $toEmail = 'fisherjoanna@sky.com';
                        $emailSubject = 'Contact Request Submitted by '.$name;
                        $htmlContent = '<h2>Contact Request Submitted</h2>
                            <h4>Name</h4><p>'.$name.'</p>
                            <h4>Email</h4><p>'.$email.'</p>
                            <h4>Subject</h4><p>'.$subject.'</p>
                            <h4>Message</h4><p>'.$message.'</p>';
                        
                        // Set content-type header for sending HTML email
                        $headers  = 'MIME-Version: 1.0' . PHP_EOL;
                        $headers .= "Content-type:text/html;charset=iso-8859-1\r\n";
                        
                        // Additional headers
                        $headers .= 'From: '.$name.'<'.$email.'>'. "\r\n";
                        
                        // Send email
                        if(mail($toEmail,$emailSubject,$htmlContent,$headers)){
                            $statusMsg = 'Your contact request has been submitted successfully !';
                            $msgClass = 'succdiv';
                        }else{
                            $statusMsg = 'Your contact request submission failed, please try again.';
                            $msgClass = 'errordiv';
                        }
                    }
                }else{
                    $statusMsg = 'Please fill all the fields.';
                    $msgClass = 'errordiv';
                }
            }
            ?>
            <div class="contact cntr">
                <a name="contact"></a>
                <?php if(!empty($statusMsg)){ ?>
                    <p class="statusMsg <?php echo !empty($msgClass)?$msgClass:''; ?>"><?php echo $statusMsg; ?></p>
                <?php } ?>
                <form class="contact-form" action="" method="post">
                <h3>Get in touch</h3>
                    <input type="text" name="name" placeholder="Full Name" required><br>
                    <input type="email" name="email" placeholder="Email Address" required><br>
                    <input type="text" name="subject" placeholder="Subject" required><br>
                    <textarea name="message" placeholder="Type your message here..." cols="30" rows="10" required></textarea>
                    <button type="submit" name="submit" id="submit">SUBMIT</button>
                </form>
            </div>
        </div>  
        <script src="scripts/calendar.js"></script>
        <script src="scripts/script.js"></script>
        <script src="assets/bundle.js"></script> 
    </body>
    <footer>
            <ul class="float-left">
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#location">Location</a></li>
                <li><a href="#reviews">Reviews</a></li>
            </ul>
            <div class="float-right">
                <a href="mailto:nnickfield@aol.com"><i class="fa fa-envelope"></i></a>&NonBreakingSpace;
                <a href="https://www.facebook.com/lepetitcottagefrance/" target="_blank"><i class="fa fa-facebook"></i></a>
            </div>
            <p>Copyright &copy; 2020 - Le Petit Cottage.</p>
    </footer>
</html>