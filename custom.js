// Better search function
/*document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector("#home-bodycontent") !== null) {
    if (account_info.agents.length >= 2) {
      const cover = document.querySelector(
        "body.header-transparent .cover-title .container"
      );
      const heroWrapper = document.createElement("div");
      heroWrapper.className = "hero-wrapper";
      heroWrapper.id = "cust-hero_wrpr";
      cover.insertBefore(heroWrapper, cover.childNodes[0]);
      const coverHeadline = document.createElement("h1");
      coverHeadline.className = "hero-headline";
      coverHeadline.textContent = "Lasting memories are made at Home!";
      heroWrapper.appendChild(coverHeadline);
      const templateHeading = (document.querySelector(
        "#home-bodycontent .cover-title-inner h1"
      ).style.display = "none");
    }
  }
  $(".footer-wrapper").append(
    '<div class="p-a-1 center white" style="opacity:0.8"><a href="https://kvcore.com/marketplace?search=Custom%20Templates" class="btn-primary btn-sm">Design by IRE Professional Services</a></div>'
  );
});*/

jQuery(document).ready(function ($) {
  //Horizontal Search
  $("#home-bodycontent .cover-title-inner")
    .html(
      '<div data-aos="fade-left" data-aos-delay="500" class="row"><div class="col-xs-12"><h1 class="text-capitalize font-weight-bold m-b-0">Love where you live.</h1></div></div>'
    )
    .show();
  $("#home-bodycontent .cover #horizontal-search").prepend(
    '<div class="hero-tabs"><div class="row"><a class="btn btn-primary active">Buy</a><a class="btn btn-primary" href="/sell.php">Sell</a></div></div>'
  );
  //Update Navigation
  $(".nav-primary").html(
    ' \
			<li class="nav-item"> \
				<a class="nav-link" href="/">Home</a> \
			</li> \
			<li class="nav-item nav-item-parent"> \
				<a href="#" class="nav-link">Buying</a> \
				<ul class="sub-menu"> \
					<li><a href="/resources/buyer-resources">Buyer Resources</a></li> \
					<li><a href="/finance.php">Get Pre-Approved</a></li> \
					<li><a href="/index.php?advanced=1&display=Seattle%2CSnohomish+County&min=300000&max=650000&beds=2&baths=2&types%5B%5D=1&minfootage=0&maxfootage=30000&minacres=0&maxacres=3000&yearbuilt=0&maxyearbuilt=2020&walkscore=0&options%5B%5D=new&keywords=&areas%5B%5D=city%3ASeattle&areas%5B%5D=county%3ASnohomish&rtype=map#rslt">Home Search</a></li> \
				</ul> \
			</li> \
			<li class="nav-item nav-item-parent"> \
				<a href="#" class="nav-link">Selling</a> \
				<ul class="sub-menu"> \
					<li><a href="/resources/seller-resources">Seller Resources</a></li> \
					<li><a href="/resources/preparing-your-home-for-sale">Preparing Your Home For Sale</a></li> \
					<li><a href="/sell.php">What\'s My Home Worth?</a></li> \
				</ul> \
			</li> \
			<li class="nav-item nav-item-parent"> \
				<a class="nav-link" data-toggle="modal" data-target="#neighborhoodModal">Neighborhoods</a> \
			</li> \
			<li class="nav-item nav-item-parent"> \
				<a href="#" class="nav-link">Resources</a> \
				<ul class="sub-menu"> \
					<li><a href="/resources/covid19">Covid-19 &amp; Real Estate</a></li> \
					<li><a href="/resources/mortgage-calculator">Payment Calculator</a></li> \
					<li><a href="/resources/utility-resources">Utility Resources</a></li> \
					<li><a href="/contact.php">Contact Us</a></li> \
				</ul> \
			</li> \
			<li class="nav-item nav-item-parent"><a href="#" class="nav-link">About</a> \
				<ul class="sub-menu"> \
					<li><a href="/agents.php">Agent Profile</a></li> \
					<li><a href="/blog.php?agentid=214213">Real Estate Blog</a></li>\
					<li><a href="/testimonials.php">Testimonials</a></li> \
					<li><a href="/contact.php">Contact</a></li> \
				</ul> \
			</li> \
			<li class="nav-item"> \
				<a class="nav-link" href="/contact.php">Contact</a> \
			</li> \
	'
  );

  $("body").append(
    '<div class="modal fade" id="neighborhoodModal"><div class="modal-dialog modal-full"> \
		<div class="kvtemplates modal-content"> \
			<div class="modal-header"> \
				<button type="button" class="d-block mx-auto btn btn-link" data-dismiss="modal"><img class="img-fluid mx-auto mt20" src="https://kunversion-frontend-blog.s3.amazonaws.com/images/customarea-buycary.com-214213-64e5e679a72e76a41262b6b5542be658a16c8de5.png" alt="Fathom Realty Logo" style="display: block;"></button><button type="button" class="close" data-dismiss="modal">&times;</button> \
			</div> \
			<div class="modal-header-search py-5 px-md-5"> \
				<div class="container m-b-2"> \
					<h3 class="text-white">Area Search</h3> \
		            <form method="get" action="/index.php#rslt" id="modal-search" autocomplete="off"> \
		               <div class="d-flex input-group location-form-group"> \
		                   <span class="input-group-addon"><i class="fa fa-search"></i></span> \
		                   <input type="hidden" name="quick" value="1"> \
		                   <input type="text" id="quick_header_search" \
		                          placeholder="Search City, Neighborhood, or Zip Code" \
		                          class="location_search_tahead location_search_tahead_quick" \
		                          autocomplete="nope"> \
		                   <div class="hidden" id="areahide2"></div> \
		                   <input name="types[]" type="hidden" value="1"> \
		                   <input name="types[]" type="hidden" value="2"> \
		                   <input name="beds" type="hidden" value="0"> \
		                   <input name="baths" type="hidden" value="0"> \
		                   <input name="min" type="hidden" value="150000"> \
		                   <input name="max" type="hidden" value="100000000"> \
		                   <input name="rtype" value="grid" type="hidden"> \
		               </div><!-- /.form-group --> \
		           </form> \
		        </div> \
		    </div> \
			<div class="modal-body container"> \
		        <div class="neighborhoodList"> \
	        		<div class="row m-b-2"> \
		        		<h3 class="h5 text-left text-uppercase font-weight-bold w-100">Local Communities</h3> \
	        			<a class="col-xs-6 col-md-3" href="/areas/Apex">Apex</a> \
	        			<a class="col-xs-6 col-md-3" href="/areas/Carrboro">Carrboro</a> \
	        			<a class="col-xs-6 col-md-3" href="/areas/Cary">Cary</a> \
	        			<a class="col-xs-6 col-md-3" href="/areas/Chapel+Hill">Chapel Hill</a> \
	        			<a class="col-xs-6 col-md-3" href="/areas/Durham">Durham</a> \
	        			<a class="col-xs-6 col-md-3" href="/areas/Fuquay+Varina">Fuquay Varina</a> \
	        			<a class="col-xs-6 col-md-3" href="/areas/Garner">Garner</a> \
	        			<a class="col-xs-6 col-md-3" href="/areas/Holly+Springs">Holly Springs</a> \
	        			<a class="col-xs-6 col-md-3" href="/areas/Knightdale">Knightdale</a> \
	        			<a class="col-xs-6 col-md-3" href="/areas/Morrisville">Morrisville</a> \
	        			<a class="col-xs-6 col-md-3" href="/areas/Raleigh">Raleigh</a> \
	        			<a class="col-xs-6 col-md-3" href="/areas/Wake+Forest">Wake Forest</a> \
	        		</div> \
	        		<div class="row"> \
			        	<div class="col-xs-12 m-b-3"> \
			        		<div class="row m-b-2"> \
				        		<h3 class="h5 text-left text-uppercase font-weight-bold w-100">Popular Cary Neighborhoods</h3> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Amberly">Amberly</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Blakeley">Blakeley</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Brickyard">Brickyard</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Cameron+Pond">Cameron Pond</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Carolina+Preserve">Carolina Preserve</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Carpenter+Village">Carpenter Village</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Cary+Park">Cary Park</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Devereaux">Devereaux</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Emory+Springs">Emory Springs</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Glenpark">Glenpark</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Glen+at+Westhigh">Glen at Westhigh</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Greenwood+Forest">Greenwood Forest</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Heritage+Pines">Heritage Pines</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Highcroft">Highcroft</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Kildaire+Farms">Kildaire Farms</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Lochmere">Lochmere</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/MacGregor+Downs">MacGregor Downs</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Montvale">Montvale</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Park+Village">Park Village</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/The+Piazza+at+Stonewater">Piazza at Stonewater</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Pirates+Cove">Pirates Cove</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Preston">Preston</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Renaissance+at+Regency">Renaissance at Regency</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Ridgefield+Farms">Ridgefield Farms</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Scottish+Hills">Scottish Hills</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Stonewater">Stonewater</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Trappers+Run">Trappers Run</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Twin+Lakes">Twin Lakes</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Weycroft">Weycroft</a> \
			        			<a class="col-xs-12" href="/areas/Cary">Search All Cary Neighborhoods</a> \
			        		</div> \
			        	</div> \
			        	<div class="col-xs-12 m-b-3"> \
			        		<div class="row m-b-2"> \
				        		<h3 class="h5 text-left text-uppercase font-weight-bold w-100">Cary Active Adult (55+) Neighborhoods</h3> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Blakeley">Blakeley</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Carolina+Preserve">Carolina Preserve</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Corbinton+at+Kildaire+Farm">Corbinton at Kildaire Farm</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/The+Courtyards+at+Kildaire+Farms">The Courtyards at Kildaire Farms</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Courtyards+on+OKelly+Chapel">Courtyards on OKelly Chapel</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Heritage+Pines">Heritage Pines</a> \
			        			<a class="col-xs-6 col-md-4 col-lg-3" href="/areas/Woodhall">Woodhall</a> \
			        		</div> \
			        	</div> \
		        	</div> \
        		</div> \
        	</div> \
        <div class="modal-footer justify-content-center"> \
        		<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button> \
        </div> \
    </div></div></div>'
  );

  $(".footer-top-left h2").css("display", "none");
  $(".footer-top-left").prepend(
    '<div class="agency-logo m-b-1 text-center text-md-left"><a href="/"><img class="footer-logo" src="https://kunversion-platform.s3.amazonaws.com/customer/fathom/FathomLogo-Full-wht-Hz.png" alt="brokerage logo"></a></div>'
  );

  //Add preferred lender to empty finance page
  $("#finance-bodycontent .main-inner .content .container .content").append(
    '<div class="row listing-row"> <div class="listing-detail col-md-12"> <div class="row"> <div class="col-lg-6"> <div class="overview"> <h2 class="text-xs-center text-md-left">Guaranteed Rate</h2> <div class="listing-user-image lender"> <a style="background-image: url(https://kunversion-frontend-blog.s3.amazonaws.com/images/customarea-buycary.com-214213-8a03e725011b6941b8d9672b5dde0888cc54a7d0.jpg);"></a> </div><ul> <li><strong>Name</strong><span>Mark Roberts</span></li><li><strong>License</strong><span>NMLS# 664423</span></li><li><strong>Phone</strong><span>(919) 902-8278</span></li><li class="text-xs-center text-md-right p-t-1"> <a class="btn btn-primary" target="_blank" href="https://www.rate.com/loan-expert/markroberts?utm_source=JustinHemker&utm_medium=website&utm_term=markroberts&utm_content=text">Get Started</a> </li></ul> </div></div><div class="col-lg-6"> <h2 class="text-xs-center text-md-left">Ask A Mortgage Question</h2> <div id="lender-form" class="cognito"></div></div><div class="col-sm-12"> <div id="finance-about"> <h2 class="text-xs-center text-md-left">Interview Q&A</h2> <p><strong>How long have you been in the mortgage business and what inspired you to get into it?</strong><br>I have been in the business since 1995. I liked the idea of helping folks achieve their dreams.</p><p><strong>What advice would you give new or first time home buyers?</strong><br>Ask a lot of questions and be patient.</p><p><strong>What can borrowers do to ensure a smooth mortgage underwriting process?</strong><br>I suggest that they follow my lead. I want it to be smooth as much as they do!</p><p><strong>What provides you with the most satisfaction in your job as a Loan Officer?</strong><br>I truly enjoy first time home buyers. There is nothing as satisfying as helping them close on their first home. </p></div></div></div></div></div>'
  );
  var url = window.location.href;
  if (jQuery("#lender-form").length) {
    Cognito.load("forms", { id: "1", entry: { URL: url } });
  }

  //Update sidebar contact info
  $(".widget table.contact tbody").html(
    '<tr><th>Call/Text:</th><td><a href="tel:919-264-8414">919-264-8414</a></td></tr>\
		<tr><th>Messenger:</th><td><a href="m.me/justinhemker.realtor">m.me/justinhemker.realtor</a></td></tr>\
		<tr><th>Email:</th><td><a href="mailto:justin@buycary.com">Justin@BuyCary.com</a></td></tr>\
		<tr><th>Home<br>Office:</th><td>3000 Remington Oaks Cir<br>Cary, NC 27519</td></tr><th>Virtual<br>Office:</th><td>211 New Edition Court<br>Cary, NC 27511</td></tr>'
  );

  $("#more-filters-button").text("Search Options");

  //If in site editor disable aos slide in effect
  if (window.location.href.indexOf("?editkey=") > -1) {
    $("#aos-stylesheet").attr("disabled", "disabled");
  }

  //If not in site editor...

  if (!(window.location.href.indexOf("?editkey=") > -1)) {
    if ($("#home-bodycontent #custom-quick-search").length) {
      $("#quick-search-title").after(
        '<form method="get" action="/index.php#rslt" id="header-search" autocomplete="off"><div class="input-group location-form-group"> <input type="hidden" name="advanced" value="1"> <label for="quick_header_search" class="sr-only">Location</label> <input type="text" id="quick_header_search" placeholder="City, Area, Zip, MLS# , or Addr" class="location_search_tahead location_search_tahead_quick" autocomplete="off" data-use_area_polygons=""> <span class="input-group-addon"><i class="fa fa-search" aria-hidden="true"></i></span> <a class="input-group-addon" href="/index.php?homesearchmore=1&rtype=map"> <span><i class="fa fa-cogs" aria-hidden="true"></i></span> </a><div class="hidden" id="areahide2"></div> <input name="types[]" type="hidden" value="1"> <input name="types[]" type="hidden" value="2"> <input name="beds" type="hidden" value="0"> <input name="baths" type="hidden" value="0"> <input name="min" type="hidden" value="0"> <input name="max" type="hidden" value="100000000"> <input name="rtype" value="grid" type="hidden"></div></form>'
      );
    }
    //If you have testimonials and custom testimonials section exists

    if (
      $("#testimonials-carousel").length &&
      $("#testimonials-wrapper").length
    ) {
      //Remove unnecessary markup

      $("#testimonials h1").remove();

      $("#testimonials .carousel-control").remove();

      //Clone testimonials and add them to custom section on home page

      $("#testimonials-wrapper .content").prepend($("#testimonials"));

      //Remove default Testimonials section from bottom on home page

      $(".header-transparent #testimonials-carousel").remove();
    } else {
      //If no testimonials, remove custom testimonial section on home page

      $("#testimonials-wrapper").remove();
    }

    $("#home-bodycontent #about").addClass(
      "skew skew-top skew-bottom background-white section-inverse p-y-3"
    );

    $("#home-bodycontent #about .container").attr("data-aos", "fade-up");

    $("#home-bodycontent #latest-blogs").addClass(
      "skew skew-top skew-bottom section-inherit"
    );

    $("#home-bodycontent #latest-blogs .col-lg-6:nth-child(even)").attr(
      "data-aos",
      "fade-right"
    );

    $("#home-bodycontent #latest-blogs .col-lg-6:nth-child(odd)").attr({
      "data-aos": "fade-left",
      "data-aos-delay": "300",
    });

    //Areas We Cover

    $("#home-bodycontent #about ~ div.p-t-3.p-b-3.background-white")
      .addClass("skew skew-top skew-bottom")
      .attr("id", "areas-we-cover");

    $(
      "#home-bodycontent #about ~ div.p-t-3.p-b-3.background-white .container"
    ).attr("data-aos", "fade-up");

    //Move SEO Area content to above area stats and featured property images
    $(".area-content")
      .addClass("listing-box")
      .prependTo(".inner-main-content > .container");

    //If you have solds and custom solds section exists

    if (
      $(".listings.container").length &&
      $(".custom-listings-wrapper").length
    ) {
      var hasCarousel = false;

      $(".listings.container").each(function (i) {
        if ($(this).find('.page-header h2:contains("My Listings")').length) {
          $hasCarousel = true;

          //$(this).removeClass('container');

          $(this).find(".page-header").remove();

          $(this).find(".owl-nav").remove();

          //Move solds to custom section on home page

          $("#sold-listings-wrapper .content").prepend(this);

          //Add custom owl override scripts to bottom of body

          var script = document.createElement("script");

          //script.type = "text/javascript";

          script.src =
            "https://kvtemplates.rocks/templates/sellercentric/recent-sold-carousel.js";

          //script.innerHTML = 'jQuery(document).ready(function(b){var a=b("#sold-wrapper .listing-carousel");var c=a.data();var d=c["owl.carousel"].options;d.items=2;d.responsive={0:{items:1,stagePadding:0},768:{items:2},1200:{items:3}};d.stagePadding=60;d.loop=true;d.margin=10;a.trigger("refresh.owl.carousel");b("#next-sold").click(function(){a.trigger("next.owl.carousel")});b("#prev-sold").click(function(){a.trigger("prev.owl.carousel")})});';

          document.body.appendChild(script);

          return false;
        }
      }); //END EACH

      //If no sold carousel, remove custom section wrapper from homepage

      if (!$hasCarousel) {
        $(".custom-listings-wrapper").remove();
      }
    }
  }
});
