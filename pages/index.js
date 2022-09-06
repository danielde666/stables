import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      



         <title>
          4ANOTHER
        </title>
        <meta
          name="description"
          content="4ANOTHER"
        />
        <meta charSet="UTF-8"></meta>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="4ANOTHER" />
        <meta
          property="og:description"
          content="4ANOTHER"
        />
        <meta property="og:url" content="https://4another.world/" />
        <meta property="og:site_name" content="4ANOTHER" />
        <meta property="og:image" content="/4asc.jpg" />
        <meta property="og:image:width" content="596" />
        <meta property="og:image:height" content="379" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@4anohter" />
        <meta name="msapplication-TileImage" content="/4asc.jpg" />
        <link rel="icon" href="/4a.svg" sizes="32x32" />
        <link rel="icon" href="/4a.svg" sizes="192x192" />
        <link rel="apple-touch-icon" href="//4asc.jpg" />
        <link rel="canonical" href="https://4another.world/" />






      </Head>

      <main className={styles.main}>
       <Image src="/4ANOTHER.svg" alt="4another" width={204} height={19} />


       <!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup">
    <form action="https://world.us12.list-manage.com/subscribe/post?u=9c547650790325d0eae831e37&amp;id=6a95c815d8&amp;f_id=0002b2e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self">
        <div id="mc_embed_signup_scroll">
        
        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
<div className="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span className="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" required>
	<span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
</div>
	<div id="mce-responses" className="clear foot">
		<div className="response" id="mce-error-response" style="display:none"></div>
		<div className="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_9c547650790325d0eae831e37_6a95c815d8" tabindex="-1" value=""></div>
        <div className="optionalParent">
            <div className="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button">
                <p className="brandingLogo"><a href="http://eepurl.com/h-tl3f" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
            </div>
        </div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->
      </main>

     
    </div>
  )
}
