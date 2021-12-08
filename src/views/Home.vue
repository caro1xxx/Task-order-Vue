<template>
  <div class="container-fluid" style="margin-top:50px;">
    <div class="row">
      <div id="body1" class="col-md-12 position-relative"></div>
      <!-- <div id="body2" class="col-md-12">
        <div class="col-md-12">
          <p class="fs-1">Payment methods we support</p>
        </div>
        <div class="col-md-12" style="padding-bottom:40px">
          <div class="row">
            <div class="col-md-2 offset-md-3">
              <svg t="1631102419322" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1246" width="128" height="128"><path d="M254.208 765.269333H200.661333c-3.669333 0-7.381333 1.877333-7.381333 7.424l-22.144 138.88c0 1.877333 1.834667 3.712 3.712 3.712h25.813333c3.712 0 7.381333-1.877333 7.381334-7.424l7.381333-38.869333c0-3.712 3.712-7.424 7.381333-7.424h18.474667c35.072 0 57.216-18.517333 62.72-51.84 1.877333-14.805333 0-25.941333-7.338667-35.2-9.216-5.546667-22.186667-9.258667-42.453333-9.258667z m5.546667 50.005334c-1.877333 20.394667-18.474667 20.394667-33.237334 20.394666h-9.216l7.381334-35.2c0-1.834667 1.834667-5.546667 3.669333-5.546666h3.712c9.216 0 20.309333 0 23.978667 7.381333 3.712 1.877333 5.546667 7.424 3.712 12.970667z m158.72 0h-25.856c-1.834667 0-3.669333 1.877333-3.669334 3.712l-1.877333 7.424-1.834667-1.877334c-7.381333-9.258667-18.432-11.093333-31.36-11.093333-29.525333 0-53.546667 22.186667-57.216 53.674667-1.834667 14.848 0 29.653333 9.216 40.746666 9.216 9.258667 20.309333 12.970667 33.237334 12.970667 12.928 0 25.813333-3.712 35.072-14.805333l-1.877334 7.424c0 1.834667 1.877333 3.669333 3.712 3.669333h23.978667c3.712 0 7.381333-1.834667 7.381333-7.381333l12.928-88.917334c1.834667-3.669333 0-5.546667-1.834666-5.546666z m-38.784 51.84c-1.834667 14.848-14.762667 24.106667-29.525334 24.106666a23.68 23.68 0 0 1-18.432-7.424c-3.712-3.712-3.712-11.093333-3.712-18.517333 1.834667-14.805333 14.762667-24.064 29.525334-24.064 7.381333 0 12.928 1.834667 18.474666 7.381333 3.669333 5.546667 7.381333 11.093333 3.669334 18.517334z m179.072-51.84h-25.856c-1.834667 0-3.712 1.877333-7.381334 1.877333l-35.072 53.674667-14.762666-51.84c0-1.834667-3.712-3.712-7.381334-3.712h-25.856c-1.834667 0-3.669333 1.877333-3.669333 3.712v1.834666l29.525333 85.205334-25.856 38.869333c-1.834667 1.877333 0 3.712 0 7.424h29.525334c1.877333 0 3.712-1.834667 7.381333-1.834667l86.784-127.786666c-3.712-1.877333-5.546667-5.546667-7.381333-7.424z" fill="#253B80" p-id="1247"></path><path d="M645.504 765.269333H590.08c-3.712 0-7.381333 1.877333-7.381333 7.424l-22.186667 140.757334c0 1.834667 1.877333 3.669333 3.712 3.669333h29.525333c1.877333 0 3.712-1.834667 3.712-3.712l7.381334-40.704c0-3.712 3.669333-7.424 7.381333-7.424h18.474667c35.072 0 57.173333-18.517333 62.72-51.84 1.877333-14.805333 0-25.941333-7.381334-35.2-9.216-9.258667-22.144-12.970667-40.576-12.970667z m7.381333 50.005334c-1.877333 20.394667-18.474667 20.394667-33.237333 20.394666h-9.216l7.381333-35.2c0-1.834667 1.834667-3.712 3.669334-3.712h3.712c9.216 0 20.309333 0 23.978666 7.424 3.712 0 3.712 5.546667 3.712 11.093334z m155.008 0h-25.813333c-1.834667 0-3.712 1.877333-3.712 3.712l-1.834667 7.424-1.834666-1.877334c-7.381333-9.258667-18.474667-11.093333-31.402667-11.093333-29.525333 0-53.504 22.186667-57.173333 53.674667-1.877333 14.848 0 29.653333 9.216 40.746666 9.216 9.258667 20.309333 12.970667 33.194666 12.970667 12.928 0 25.856-3.712 35.072-14.805333l-1.834666 7.424c0 1.834667 1.834667 3.669333 3.712 3.669333h23.978666c3.669333 0 7.381333-1.834667 7.381334-7.381333l12.928-88.917334c3.669333-3.669333 3.669333-5.546667-1.877334-5.546666z m-35.029333 51.84c-1.877333 14.848-14.762667 24.106667-29.568 24.106666a23.637333 23.637333 0 0 1-18.432-7.424c-3.712-3.712-3.712-11.093333-3.712-18.517333 1.877333-14.805333 14.762667-24.064 29.525333-24.064 7.424 0 12.928 1.834667 18.474667 7.381333 3.712 5.546667 3.712 11.093333 3.712 18.517334z m66.432-98.133334l-22.186667 142.592c0 1.877333 1.877333 3.712 3.712 3.712h22.186667c3.669333 0 7.338667-1.877333 7.338667-7.424l22.186666-140.714666c0-1.877333-1.877333-3.712-3.712-3.712h-23.978666c-3.712 1.834667-5.546667 3.712-5.546667 5.546666z" fill="#179BD7" p-id="1248"></path><path d="M438.784 691.2l11.093333-68.522667H311.381333L388.949333 119.04c0-1.834667 0-1.834667 1.834667-5.546667 0 0 1.834667-1.877333 5.546667-1.877333h191.957333c64.597333 0 107.050667 14.848 131.029333 40.746667 9.216 11.093333 16.64 24.106667 22.186667 38.912 1.792 18.517333 1.792 35.157333 0 55.552v16.64l11.050667 5.546666c7.381333 5.546667 16.597333 9.301333 22.144 16.682667 9.216 11.093333 16.64 24.064 18.432 40.746667 1.877333 18.517333 1.877333 38.869333-1.834667 57.429333-5.546667 24.064-11.093333 44.416-23.978667 64.810667-9.216 16.64-22.186667 31.445333-38.784 40.704a247.552 247.552 0 0 1-49.834666 24.106666c-22.144 5.546667-40.576 7.381333-60.885334 7.381334h-22.186666c-22.101333 0-40.576 16.64-44.288 38.912v7.381333l-18.432 118.528v5.546667s0 1.877333-1.834667 1.877333h-1.877333c0-3.712-90.453333-1.877333-90.453334-1.877333z" fill="#253B80" p-id="1249"></path><path d="M778.368 248.618667c0 5.546667-1.834667 7.424-1.834667 12.970666-27.690667 138.88-116.266667 183.338667-230.698666 183.338667h-59.093334c-14.762667 0-23.978667 9.258667-27.648 24.064l-29.568 192.597333-7.381333 55.552c-1.834667 7.381333 5.546667 14.805333 12.928 16.64h107.093333c12.885333 0 22.101333-9.258667 23.978667-22.186666v-5.546667l20.266667-125.952 1.877333-7.381333c1.834667-12.970667 12.928-22.229333 23.978667-22.229334h14.762666c101.546667 0 177.194667-42.624 203.050667-161.109333 9.216-50.005333 5.546667-92.586667-20.309333-120.362667-11.093333-7.424-18.474667-14.848-31.402667-20.394666z" fill="#179BD7" p-id="1250"></path><path d="M750.677333 237.525333c-5.546667 0-7.381333-1.877333-12.885333-1.877333-5.546667 0-9.258667-1.834667-12.928-1.834667-16.64-1.834667-35.072-5.546667-51.669333-5.546666h-155.050667c-12.928 0-22.186667 9.258667-24.021333 22.186666l-31.36 212.992v5.546667a27.733333 27.733333 0 0 1 27.690666-24.064h59.050667c114.432 0 204.885333-46.293333 230.741333-183.338667 0-5.546667 1.834667-7.424 1.834667-12.970666-7.381333-1.834667-14.762667-7.381333-22.186667-9.258667l-9.216-1.834667c0 1.834667 0 0 0 0z" fill="#222D65" p-id="1251"></path><path d="M494.122667 252.330667c1.877333-12.970667 12.928-22.186667 24.021333-22.186667h155.050667c16.597333 0 35.029333 0 51.626666 5.546667 5.546667 0 9.258667 1.834667 12.970667 1.834666 5.546667 0 7.381333 1.834667 12.885333 1.834667l5.546667 1.877333c7.381333 1.834667 14.762667 5.546667 22.186667 9.258667 7.338667-50.005333 0-85.205333-27.733334-114.816-29.525333-35.2-84.906667-50.005333-153.173333-50.005333H398.165333c-14.762667 0-23.978667 9.258667-27.690666 24.064L289.28 639.36c-1.834667 9.258667 5.546667 16.64 14.762667 20.352h125.482666l31.402667-196.266667c1.834667 0 33.194667-211.114667 33.194667-211.114666z" fill="#253B80" p-id="1252"></path></svg>
            </div>
            <div class="col-md-2">
              <svg t="1631102584970" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2049" width="128" height="128"><path d="M948.138667 672.768l-9.6-48h-107.264l-17.066667 47.658667-85.973333 0.170666a179165.44 179165.44 0 0 1 123.050666-295.168c6.997333-16.682667 19.413333-25.173333 37.717334-25.088 13.994667 0.128 36.821333 0.128 68.522666 0.042667L1024 672.64l-75.861333 0.128z m-92.714667-113.749333h69.12l-25.813333-120.32-43.306667 120.32zM301.226667 352.298667l86.442666 0.085333-133.632 320.426667-87.509333-0.085334a40569.557333 40569.557333 0 0 1-65.194667-254.122666c-4.266667-16.896-12.714667-28.714667-28.970666-34.304A2712.149333 2712.149333 0 0 0 0 361.173333V352.426667h138.112c23.893333 0 37.845333 11.562667 42.325333 35.285333 4.522667 23.765333 15.872 84.266667 34.133334 181.504L301.226667 352.298667z m205.226666 0.085333l-68.352 320.341333-82.261333-0.085333 68.266667-320.341333 82.346666 0.085333z m166.826667-5.930667c24.618667 0 55.637333 7.68 73.472 14.72l-14.421333 66.432c-16.128-6.485333-42.666667-15.232-64.981334-14.933333-32.426667 0.554667-52.48 14.165333-52.48 27.221333 0 21.248 34.816 31.957333 70.656 55.168 40.917333 26.453333 46.293333 50.218667 45.781334 76.032-0.554667 53.589333-45.781333 106.453333-141.184 106.453334-43.52-0.64-59.221333-4.309333-94.72-16.896l15.018666-69.333334c36.138667 15.146667 51.456 19.968 82.346667 19.968 28.288 0 52.565333-11.434667 52.778667-31.36 0.170667-14.165333-8.533333-21.205333-40.277334-38.698666-31.744-17.536-76.288-41.813333-75.690666-90.538667 0.725333-62.378667 59.818667-104.234667 143.744-104.234667z" p-id="2050" fill="#f2d551"></path></svg>
            </div>
            <div class="col-md-2">
              <svg t="1631102617461" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3778" width="128" height="128"><path d="M1023.795 853.64v6.348a163.807 163.807 0 0 1-163.807 163.807h-696.18A163.807 163.807 0 0 1 0 859.988v-696.18A163.807 163.807 0 0 1 163.807 0h696.181a163.807 163.807 0 0 1 163.807 163.807V853.64z" fill="#009FE9" p-id="3779"></path><path d="M844.836 648.267c-40.952-14.333-95.623-34.809-156.846-57.128a949.058 949.058 0 0 0 90.094-222.573H573.325V307.14h245.711v-43.41l-245.71 2.458V143.33H472.173c-18.223 0-21.704 20.476-21.704 20.476v102.38H204.759v40.952h245.71v61.427H245.712v40.952h409.518a805.522 805.522 0 0 1-64.909 148.246c-128.384-42.795-266.186-77.604-354.233-55.08a213.564 213.564 0 0 0-112.003 63.27c-95.418 116.917-26.21 294.034 175.274 294.034 119.989 0 236.087-67.366 325.771-177.73 134.322 65.932 398.666 176.297 398.666 176.297V701.3s-32.352-4.095-178.96-53.033z m-563.702 144.97c-158.893 0-204.759-124.699-126.336-194.112a191.86 191.86 0 0 1 90.913-46.276c93.575-10.238 189.811 35.629 293.624 86.614-74.941 94.598-166.674 153.774-258.2 153.774z" fill="#FFFFFF" p-id="3780"></path></svg>
            </div>
          </div>
        </div>
      </div> -->
      <div id="body3" class="col-md-12">
        <div class="row" style="margin-top:100px;margin-bottom:30px;">
          <div
            id="bottom"
            class="col-md-6 offset-md-3 d-flex justify-content-center  fw-bold"
          >
            <a href="/Accessibility"> Accessibility </a>
            <a href="/UserAgreement"> User Agreement</a>
            <a href="/Privacy"> Privacy </a>
            <a href="#"> Cookies </a>
          </div>
          <!-- <div id="bottom" class="col-md-6 offset-md-3 d-flex justify-content-center border-bottom">
            <a href="#" class="d-none d-lg-block">Accessibility</a>
            <a href="#">privacy protection</a>
            <a href="#">Legal agreement</a>
          </div> -->
          <div
            id="bottom"
            class="col-md-6 offset-md-3 d-flex justify-content-end"
          >
            <span style="text-align: center;font-size:14px;"
              >&copy; 1999–2021 E.E. Ltd. has applied for a license under the
              Singapore Payment Services Act (“PS Act”) with the Monetary
              Authority of Singapore. During this statutory transitional period,
              3PL is operating under an exemption from holding a license and is
              allowed to continue to provide specific payment services.</span
            >
          </div>
        </div>
      </div>
      <div class="nav_back">
        1
      </div>
      <div
        :class="{ text1: iswidth.istext1, text2: iswidth.istext2 }"
        class="col-md-6 offset-md-1 content-front"
      >
        <div class="col-md-12 d-flex justify-content-start">
          <p
            style="text-align: start;text-shadow: 5px 5px 5px #686868;"
            :class="{
              xstitle: iswidth.xstitle,
              smtitle: iswidth.smtitle,
              mdtitle: iswidth.mdtitle,
              lgtitle: iswidth.lgtitle,
              xltitle: iswidth.xltitle,
            }"
            class="fw-bold fonts"
          >
            2021 popular employment information platform
            <!-- 2021 popular employment information platform -->
          </p>
        </div>
        <div
          class="col-md-12 d-flex justify-content-start"
          style="visibility: hidden;"
        >
          1
        </div>
        <div class="col-md-12 d-flex justify-content-start">
          <p
            :class="{
              xscontent: iswidth.xscontent,
              smcontent: iswidth.smcontent,
              mdcontent: iswidth.mdcontent,
              lgcontent: iswidth.lgcontent,
              xlcontent: iswidth.xlcontent,
            }"
            style="text-align: start;text-shadow: 5px 5px 5px #686868;"
          >
            Provide a variety of job information.7x24 Online Support Team Match your right position
          </p>
        </div>
        <div class="col-md-12 d-flex justify-content-start">
          <p
            :class="{
              xscontent: iswidth.xscontent,
              smcontent: iswidth.smcontent,
              mdcontent: iswidth.mdcontent,
              lgcontent: iswidth.lgcontent,
              xlcontent: iswidth.xlcontent,
            }"
            style="text-align: start;text-shadow: 5px 5px 5px #686868;"
          >
            One-on-one service
          </p>
        </div>
        <div class="col-md-12 d-flex justify-content-start">
          <p
            :class="{
              xscontent: iswidth.xscontent,
              smcontent: iswidth.smcontent,
              mdcontent: iswidth.mdcontent,
              lgcontent: iswidth.lgcontent,
              xlcontent: iswidth.xlcontent,
            }"
            style="text-align: start;text-shadow: 5px 5px 5px #686868;"
          >
            Massive position waiting for you to choose
          </p>
        </div>
        <div class="col-md-12 d-flex justify-content-center">
          <div
            id="goto"
            @click="gototask"
            class="rounded-pill d-flex justify-content-center"
          >
            <p class="text-light fs-3">Let's go</p>
          </div>
        </div>
        <!-- 客服联系方式 -->
        <div style="margin-top:100px" class="d-none d-lg-block col-md-7 offset-md-5 position-absolute top-50 start-100 translate-middle">
          <div class="row">
            <div class="col-md-12">
              <p class="fs-3">Customer Service</p>
            </div>
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-4 rongqi">
                  <img style="margin-right:15px;margin-left:15px" src="../assets/微信图片_20211027220957.png"  alt="">
                </div>
              <div class="col-md-4 rongqi">
                <img style="margin-right:15px;margin-left:15px" src="../assets/微信图片_20211027220932.png" alt="">
              </div>
              <div class="col-md-4 rongqi">
                <img style="margin-right:15px;margin-left:15px" src="../assets/微信图片_20211027221004.png" alt="">
              </div>
              </div>

            </div>
          </div>
        </div>
        
        <div v-if="iskefu" style="margin-bottom:20px" class="position-absolute bottom-0 start-50 translate-middle-x">
          <div>
            customer service
          </div>
          <span style="margin-left:10px;margin-right:10px">
            <svg @click="kefu(1)" t="1635412020008" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1588" width="40" height="40"><path d="M583.72 385.763c80.657 108.135 226.425 152.67 226.425 152.67-10.893-187.192-122.71-278.664-299.733-279.563-211.77-1.08-334.784 170.304-288.402 338.997 0 0 358.76-134.913 361.71-212.104z" p-id="1589" fill="#1296db"></path><path d="M843.844 721.202c65.94-16.945 114.865-15.888 114.865-150.872 0-65.013-38.867-120.714-93.98-144.029-40.6-153.75-167.01-310.065-356.839-314.342-6.053-0.135-12.062-0.158-18.004 0C306 116.684 179.993 258.868 165.816 423.78c-58.445 21.626-102.442 79.103-100.462 146.55 4.433 151.456 66.322 153.863 148.713 155.55V432.783C215.8 307.478 338.563 168.489 507.89 168.489c168.314 0 261.416 131 302.465 247.37v301.38c-8.282 19.4-30.45 41.207-70.936 80.297-52.82 50.972-128.908 77.414-128.908 77.414-8.845 1.868-15.079 13.684-12.603 23.765 2.475 10.082 13.253 16.136 21.605 12.242 0 0 80.274-26.195 140.43-84.257 59.55-57.496 83.697-104.937 83.9-105.498z" p-id="1590" fill="#1296db"></path><path d="M337.861 624.216a36.613 36.613 0 1 0 74.933 0 36.613 36.613 0 1 0-74.933 0zM619.828 624.216a36.613 36.613 0 1 0 74.932 0 36.613 36.613 0 1 0-74.932 0z" p-id="1591" fill="#1296db"></path></svg>
          </span>
          <span style="margin-left:10px;margin-right:10px">
              <svg @click="kefu(2)" t="1635412020008" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1588" width="40" height="40"><path d="M583.72 385.763c80.657 108.135 226.425 152.67 226.425 152.67-10.893-187.192-122.71-278.664-299.733-279.563-211.77-1.08-334.784 170.304-288.402 338.997 0 0 358.76-134.913 361.71-212.104z" p-id="1589" fill="#1296db"></path><path d="M843.844 721.202c65.94-16.945 114.865-15.888 114.865-150.872 0-65.013-38.867-120.714-93.98-144.029-40.6-153.75-167.01-310.065-356.839-314.342-6.053-0.135-12.062-0.158-18.004 0C306 116.684 179.993 258.868 165.816 423.78c-58.445 21.626-102.442 79.103-100.462 146.55 4.433 151.456 66.322 153.863 148.713 155.55V432.783C215.8 307.478 338.563 168.489 507.89 168.489c168.314 0 261.416 131 302.465 247.37v301.38c-8.282 19.4-30.45 41.207-70.936 80.297-52.82 50.972-128.908 77.414-128.908 77.414-8.845 1.868-15.079 13.684-12.603 23.765 2.475 10.082 13.253 16.136 21.605 12.242 0 0 80.274-26.195 140.43-84.257 59.55-57.496 83.697-104.937 83.9-105.498z" p-id="1590" fill="#1296db"></path><path d="M337.861 624.216a36.613 36.613 0 1 0 74.933 0 36.613 36.613 0 1 0-74.933 0zM619.828 624.216a36.613 36.613 0 1 0 74.932 0 36.613 36.613 0 1 0-74.932 0z" p-id="1591" fill="#1296db"></path></svg>
          </span>
          <span style="margin-left:10px;margin-right:10px">
              <svg @click="kefu(3)" t="1635412020008" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1588" width="40" height="40"><path d="M583.72 385.763c80.657 108.135 226.425 152.67 226.425 152.67-10.893-187.192-122.71-278.664-299.733-279.563-211.77-1.08-334.784 170.304-288.402 338.997 0 0 358.76-134.913 361.71-212.104z" p-id="1589" fill="#1296db"></path><path d="M843.844 721.202c65.94-16.945 114.865-15.888 114.865-150.872 0-65.013-38.867-120.714-93.98-144.029-40.6-153.75-167.01-310.065-356.839-314.342-6.053-0.135-12.062-0.158-18.004 0C306 116.684 179.993 258.868 165.816 423.78c-58.445 21.626-102.442 79.103-100.462 146.55 4.433 151.456 66.322 153.863 148.713 155.55V432.783C215.8 307.478 338.563 168.489 507.89 168.489c168.314 0 261.416 131 302.465 247.37v301.38c-8.282 19.4-30.45 41.207-70.936 80.297-52.82 50.972-128.908 77.414-128.908 77.414-8.845 1.868-15.079 13.684-12.603 23.765 2.475 10.082 13.253 16.136 21.605 12.242 0 0 80.274-26.195 140.43-84.257 59.55-57.496 83.697-104.937 83.9-105.498z" p-id="1590" fill="#1296db"></path><path d="M337.861 624.216a36.613 36.613 0 1 0 74.933 0 36.613 36.613 0 1 0-74.933 0zM619.828 624.216a36.613 36.613 0 1 0 74.932 0 36.613 36.613 0 1 0-74.932 0z" p-id="1591" fill="#1296db"></path></svg>
          </span>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import Carousel from "@/components/Home/Carousel.vue";
import Text from "@/components/Home/Text.vue";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import { onMounted, reactive, ref } from "@vue/runtime-core";
import TaskReviewVue from "../components/Manage/TaskReview.vue";
name: "Home";
const Router = useRouter();
const gototask = () => {
  // Router.push("/task");
  if (Cookies.get('token') != undefined)
    {
        Router.push('/task');
    }
    else
    {
        Router.push("/login");
    }
};

const kefu = (num) => {
  if(num==1){
    window.open('https://api.whatsapp.com/qr/H2UDRYBVREJ7N1','_blank')
  }
  if(num==2){
    window.open('https://wa.me/qr/UMYQBD7KAYDSG1','_blank')
  }
  if(num==3){
    window.open('https://wa.me/qr/SMDCZRP32FZUH1','_blank')
  }
}
const iswidth = reactive({
  istext1: true,
  istext2: false,
  xstitle: false,
  xscontent: false,
  smtitle: false,
  smcontent: false,
  mdtitle: false,
  mdcontent: false,
  lgtitle: false,
  lgcontent: false,
  xltitle: false,
  xlcontent: false,
});
const iskefu = ref(false);
// 判断宽度
onMounted(() => {
  if (document.body.clientWidth <= 700) {
    if (document.body.clientWidth <= 500)
    {
      iskefu.value = true
    }
    iswidth.istext1 = false;
    iswidth.istext2 = true;
    iswidth.xstitle = true;
    iswidth.xscontent = true;
    iswidth.smtitle = false;
    iswidth.smcontent = false;
    iswidth.mdtitle = false;
    iswidth.mdcontent = false;
    iswidth.lgtitle = false;
    iswidth.lgcontent = false;
    iswidth.xltitle = false;
    iswidth.xlcontent = false;
  } else if (
    document.body.clientWidth > 700 &&
    document.body.clientWidth < 1024
  ) {
    iswidth.istext1 = false;
    iswidth.istext2 = true;
    iswidth.xstitle = false;
    iswidth.xscontent = false;
    iswidth.smtitle = true;
    iswidth.smcontent = true;
    iswidth.mdtitle = false;
    iswidth.mdcontent = false;
    iswidth.lgtitle = false;
    iswidth.lgcontent = false;
    iswidth.xltitle = false;
    iswidth.xlcontent = false;
  } else if (
    document.body.clientWidth >= 1024 &&
    document.body.clientWidth < 1400
  ) {
    iswidth.istext1 = false;
    iswidth.istext2 = true;
    iswidth.xstitle = false;
    iswidth.xscontent = false;
    iswidth.smtitle = false;
    iswidth.smcontent = false;
    iswidth.mdtitle = true;
    iswidth.mdcontent = true;
    iswidth.lgtitle = false;
    iswidth.lgcontent = false;
    iswidth.xltitle = false;
    iswidth.xlcontent = false;
  } else if (
    document.body.clientWidth >= 1400 &&
    document.body.clientWidth < 1600
  ) {
    iswidth.istext1 = false;
    iswidth.istext2 = true;
    iswidth.xstitle = false;
    iswidth.xscontent = false;
    iswidth.smtitle = false;
    iswidth.smcontent = false;
    iswidth.mdtitle = false;
    iswidth.mdcontent = false;
    iswidth.lgtitle = true;
    iswidth.lgcontent = true;
    iswidth.xltitle = false;
    iswidth.xlcontent = false;
  } else if (document.body.clientWidth >= 1600) {
    iswidth.istext1 = false;
    iswidth.istext2 = true;
    iswidth.xstitle = false;
    iswidth.xscontent = false;
    iswidth.smtitle = false;
    iswidth.smcontent = false;
    iswidth.mdtitle = false;
    iswidth.mdcontent = false;
    iswidth.lgtitle = false;
    iswidth.lgcontent = false;
    iswidth.xltitle = true;
    iswidth.xlcontent = true;
  }
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "MyriadPro-Regular";
  src: url("../assets/MyriadPro-Regular.svg");
  src: url("../assets/MyriadPro-Regular.otf?#iefix") format("embedded-opentype"),
    url("../assets/MyriadPro-Regular.svg") format("woff"),
    url("../assets/MyriadPro-Regular.svg") format("truetype"),
    url("../assets/MyriadPro-Regular.svg#webfont34M5alKg") format("svg");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "MyriadPro-Light";
  src: url("../assets/MyriadPro-Light.svg");
  src: url("../assets/MyriadPro-Light.ttf?#iefix") format("embedded-opentype"),
    url("../assets/MyriadPro-Light.svg") format("woff"),
    url("../assets/MyriadPro-Light.svg") format("truetype"),
    url("../assets/MyriadPro-Light.svg#webfont34M5alKg") format("svg");
  font-weight: normal;
  font-style: normal;
}
#body1 {
  padding: 0px;
  background-image: url(../assets/5.jpg);
  height: 700px;
  width: 100%;
  float: left;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-filter: blur(2px);
  -moz-filter: blur(2px);
  -o-filter: blur(2px);
  -ms-filter: blur(2px);
  filter: blur(2px);
  // opacity: 0.7;
}
#fonts {
  font-family: "MyriadPro-Light";
}
.text1 {
  margin-top: 150px;
  color: #fff;
}
.text2 {
  margin-top: 100px;
  color: #fff;
}

.content-front {
  position: absolute;
  left: 10px;
  right: 10px;
  height: 600px;
  line-height: 30px;
  text-align: center;
  word-wrap: break-word;
  word-break: break-all;
}

#body2 {
  background-color: #0070ba;
  color: aliceblue;
  div {
    margin-top: 40px;
  }
}
#goto {
  margin-top: 50px;
  background-color: #0070ba;
  height: 50px;
  width: 250px;
  p {
    line-height: 50px;
  }
}
#body3 {
  background-color: white;
  color: #687173;
  #bottom {
    padding: 0px 0px;
    a {
      padding: 0px 0px;
      margin-right: 10px;
      margin-left: 10px;
      font-size: 12px;
    }
  }
}
.xstitle {
  font-size: 40px;
  line-height: 50px;
  margin: 0px 10px;
}
.xscontent {
  font-size: 20px;
  line-height: 30px;
  margin: 0px 10px;
}
.smtitle {
  font-size: 40px;
  line-height: 40px;
}
.smcontent {
  font-size: 25px;
  line-height: 25px;
}
.mdtitle {
  font-size: 50px;
  line-height: 60px;
}
.mdcontent {
  font-size: 25px;
  line-height: 30px;
}
.lgtitle {
  font-size: 60px;
  line-height: 60px;
}
.lgcontent {
  font-size: 30px;
  line-height: 35px;
}
.xltitle {
  font-size: 60px;
  line-height: 80px;
}
.xlcontent {
  font-size: 35px;
  line-height: 40px;
}
.visisbly {
  visibility: hidden;
}
// 蒙版
.nav_back {
  position: absolute;
  top: 0;
  width: 100%;
  height: 750px;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0.9;
}
.rongqi{
  height: 100;
  img{
    max-width: 100%;
      max-height: 100%;
      display: block;
      margin: auto;
      // text-shadow: 5px 5px 5px #686868;
      box-shadow: 5px 5px 5px #686868;
      /*考虑浏览器兼容性*/
      -moz-box-shadow: 5px 5px 5px #686868;
      -webkit-box-shadow: 5px 5px 5px #686868;
}
}
</style>
