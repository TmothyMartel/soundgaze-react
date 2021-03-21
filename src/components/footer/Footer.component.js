import React from 'react';
import './Footer.styles.css';

function Footer() {
    return (
        <footer>
        <div class="container">
            <div class="row text-center">
                <div class="col-12 mx-auto pt-3">
                    <h5 class="text-center">Social Media</h5>
                    <div class="col mx-auto mb-1">
                        <a href="https://www.facebook.com" class="social-icon"><img src="assets/icons/facebook.svg" alt="Facebook" width="28"/></a>
                    <a href="https://www.instagram.com" class="social-icon"><img src="/assets/icons/instagram.svg" alt="instagram" width="28"/></a>
                    <a href="https://www.twitter.com" class="social-icon"><img src="/assets/icons/twitter.svg" alt="Twitter" width="28"/></a>
                    </div>
                   <p class=" col-12 copywrite ">&copy; SoundGaze 2021</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;