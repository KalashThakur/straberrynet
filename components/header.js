const navbar = () => {
  return `  <div id="mainmenu" class="header" role="navigation">
    <div id="navbar">
        <a href="index.html"><div id="logo"></div></a>
        <div id="searchBar">
           <div id="inputSearch-Box">
            <input type="text" id="search" placeholder="SEARCH BRAND / PRODUCT">
            <button class="searchBtn" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
           <div id="inputSearch-Item">
               <ul>
                   <li>Natural Beauty</li>
                   <li>Cleaning Balm </li>
                   <li>Shiseido</li>
                   <li>Rosehip Oil</li>
               </ul>
           </div> 
        </div>
        <div id="accountSetPage">
            <div id="accountSetPage-top">
                <span>Rs . INR India: English</span>
                <span>Order Tracking</span>
            </div>
            <div id="accountSetPage-button">
                <div class="account">
                    <div class="account-icon"></div>
                    <div class="account-Singin" >Sign in</div>
                </div>
                <div class="account" id="account2">
                    <div class="whitelist-icon"></div>
                    <div id="account-Whitelist" class="account-Singin">Wishlist</div>
                </div>
                <div class="account" id="account3" >
                    <div class="bag-icon"></div>
                    <div id="account-Bag" class="account-Singin"><a href="bag.html">Bag</a></div>
                    <div id="total" class="totalBag-item">0</div> 
                </div>
            </div>
        </div>
    </div>

</div>
<div id="cont">
<div id="secpar">
    <div><span class="material-icons-outlined">reorder</span>SHOP BY BRAND</div>
    <div id="skincare">SKINCARE</div>
    <div>MAKEUP</div>
    <div id="haircare">HAIRCARE</div>
    <div id="prefume">PERFUME</div>
    <div id="menskincare">MEN'S SKINCARE</div>
    <div>MEN'S COLOGNE</div>
    <div>HOME SCENTS</div>
    <div>NATURAL BEAUTY</div>
    <div><span class="material-icons-outlined">redeem</span>SPECIALS</div>
    <div><span id="star" class="material-icons-outlined">star</span>NEW</div>
</div>
</div>`;
};

const footer = () => {
  return `    <div id="first-main-footer-bg">

    <div id="first-main-footer">

        <div id="socia-mediaAnd-search">

            <div id="search-emailOffer">
                <h5 class="stayConnected">STAY CONNECTED</h5>
                <input type="text" placeholder="Enter your email for exclusive offers">
                <button id="footer-signup-button">SIGN UP</button>
            </div>
            <div id="sociaMedia-icon">
                <i class="fa-brands fa-facebook-square"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-pinterest"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
        </div>

        <div id="middle-top-footer">
            <div id="middle-top-footer-img-bg"></div>
            <div id="middle-top-footer-img-side-content">
                <h5 class="over">Over</h5>
                <p class="number">33,000</p>
                <h4>products from</h4>
                <p class="number">800</p>
                <h6>brands</h6>
            </div>
        </div>
        <div id="right-top-footer">
            <div id="right-top-footer-img"></div>
            <div id="right-top-footer-img-side-content">
                <p class="freeShipping">FREE Shipping Anywhere
                    in the world!</p>
                
                <p class="conditionsApply">Conditions apply</p>
            </div>
            
        </div>
    </div>
</div>
<div id="second-main-footer">
    <div id="footer-little-menu">
        <div id="footer-little-menu-left">
            <ul>
                <li>Shipping & Tax</li>
                <li>Returns Policy</li>
                <li>FAQ</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div id="footer-little-menu-right">
            <i class="fa-solid fa-globe"></i> Change Country/Currency
        </div>
        
    </div>
    <div id="footer-middile-menu">
        <div id="payWith">
            <div>PAY WITH :</div>
            <div id="paytem-Img">
                <div><img alt="visa" src="https://a.cdnsbn.com/images/common/Visa_16.png"></div>
                <div><img alt="Master" src="https://a.cdnsbn.com/images/common/Master_16.png"></div>
                <div><img alt="paypal" src="https://a.cdnsbn.com/images/common/Paypal_16.png"></div>
                <div><img alt="jcb" src="https://a.cdnsbn.com/images/common/JCB_16.png"></div>
<div><img alt="AmericanExpress" src="https://a.cdnsbn.com/images/common/AmericanExpress_16.png"></div>
                <div><img alt="discover" src="https://a.cdnsbn.com/images/common/Discover_16.png"></div>
                <div><img alt="Master" src="https://a.cdnsbn.com/images/common/DiscoverMore.png"></div>
            </div>
        </div>
        <div id="myAccount">
            <div>MY ACCOUNT</div>
            <div id="myAccount-ul" class="myAccount-list">
                <ul>
                    <li>Track Order</li>
                    <li>Order History</li>
                    <li>My Reviews</li>
                    <li>Birthday Treat Program</li>
                </ul>
            </div>
        </div>
        <div class="ourCompany">
            <div>OUR COMPANY</div>
            <div id="ourCompany-list" class="myAccount-list">
                <ul>
                    <li>About Us</li>
                    <li>Point Rewards Program</li>
                    <li>Contact Us</li>
                    <li>Affiliates</li>
                    <li>Partners</li>
                </ul>
            </div>
        </div>
        <div id="download" class="ourCompany">
            <div>DOWNLOAD</div>
            <a  href="https://itunes.apple.com/hk/app/strawberrynet.com/id436735308?mt=8"><div class="app"></div></a>
            <a href="https://play.google.com/store/apps/details?id=com.strawberrynetNew.android">
             <div class="playStore"></div>
            </a>
        </div>
        <div id="RatedExcellent" class="ourCompany">
            <div class="rated">Rated Excellent</div>
            <div class="ratedExcellent-Img-1">
                <div><img src="//medals.bizrate.com/medals/dynamic/27609_medal.gif" alt=""></div>
                <div><img src="https://a.cdnsbn.com/images/common/HK-Trust-Mark_resize.png" alt=""></div>
            </div>
            <div id="rating-Rated-excellent" class="rated">9.0 out of 10!</div>
            <div id="ratedExcellent-Img-2" class="ratedExcellent-Img-1">
                <div><img src="https://a.cdnsbn.com/images/common/Premiumeshop.png" alt=""></div>
                <div><img src="https://a.cdnsbn.com/images/common/2021TRUSTeshop.jpg" alt=""></div>
            </div>
        </div>
    </div>
    <div id="Excellent-bar"></div>
    <hr class="pink">
    <div id="terms-and-condition">
        <p class="terms"> Privacy & Security | Terms & Conditions | Point Rewards Program Terms & Conditions
            1998 - 2022 © StrawberryNET.com All Rights Reserved. </p>
    </div>
</div>`;
};

export { navbar, footer };
