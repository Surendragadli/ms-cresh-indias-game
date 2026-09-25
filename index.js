<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ms Cresh - Register</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Great+Vibes&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }
        body { background: linear-gradient(180deg, #020b26 0%, #061845 100%); color: white; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 20px; }
        .container { width: 100%; max-width: 400px; }
        .logo-box { text-align: center; margin-bottom: 15px; position: relative; }
        .logo-box .main-text { font-size: 50px; font-weight: 900; color: #ffcc00; text-shadow: 2px 2px 0px #000, 0 0 15px rgba(255, 204, 0, 0.6); line-height: 1; font-style: italic; display: inline-block; position: relative; }
        .logo-box .main-text span { color: #ffffff; text-shadow: 0 0 15px rgba(0, 210, 255, 0.8); }
        .logo-box .game-text { font-family: 'Great Vibes', cursive; font-size: 35px; color: #ffcc00; text-shadow: 2px 2px 4px #000; margin-top: -15px; }
        .features-bar { display: flex; justify-content: space-between; background: linear-gradient(90deg, #0a1128, #1a2035); border: 2px solid #e5b022; border-radius: 30px; padding: 10px 15px; margin-bottom: 20px; box-shadow: 0 0 10px rgba(229, 176, 34, 0.5); }
        .feature { font-size: 11px; font-weight: 700; display: flex; align-items: center; gap: 5px; }
        .feature i { color: #ffcc00; font-size: 16px; }
        .register-box { background: linear-gradient(180deg, #0a1128, #050813); border: 2px solid #e5b022; border-radius: 20px; padding: 30px 20px; box-shadow: 0 0 20px rgba(229, 176, 34, 0.4), inset 0 0 15px rgba(0, 210, 255, 0.2); position: relative; }
        .register-heading { text-align: center; color: #ffcc00; font-size: 26px; font-weight: 900; letter-spacing: 2px; margin-bottom: 25px; text-shadow: 0 2px 4px black; display: flex; justify-content: center; align-items: center; gap: 10px; }
        .input-group { position: relative; margin-bottom: 20px; }
        .input-group i { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: #ffffff; font-size: 18px; }
        .input-group input { width: 100%; background: rgba(4, 15, 38, 0.8); border: 2px solid #00d2ff; border-radius: 12px; padding: 15px 15px 15px 45px; color: white; font-size: 14px; font-weight: bold; outline: none; box-shadow: 0 0 10px rgba(0, 210, 255, 0.3); transition: 0.3s; }
        .input-group input::placeholder { color: #8da4d0; }
        .input-group input:focus { box-shadow: 0 0 15px #00d2ff, inset 0 0 10px #00d2ff; }
        .eye-icon { position: absolute; right: 15px; left: auto !important; cursor: pointer; color: #8da4d0 !important; }
        .btn-register { width: 100%; background: linear-gradient(90deg, #ffcc00, #ff9900); border: none; border-radius: 12px; padding: 15px; color: black; font-size: 18px; font-weight: 900; cursor: pointer; box-shadow: 0 5px 15px rgba(255, 204, 0, 0.4); display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: 10px; }
        .divider { text-align: center; margin: 20px 0; font-size: 14px; font-weight: bold; color: white; display: flex; align-items: center; }
        .divider::before, .divider::after { content: ""; flex: 1; border-bottom: 1px solid #ffffff; margin: 0 10px; opacity: 0.5; }
        .btn-login { width: 100%; background: rgba(4, 15, 38, 0.8); border: 2px solid #00d2ff; border-radius: 12px; padding: 15px; color: white; font-size: 18px; font-weight: 900; cursor: pointer; box-shadow: 0 0 10px rgba(0, 210, 255, 0.3); display: flex; justify-content: center; align-items: center; gap: 10px; }
        .footer-text { text-align: center; color: #ffcc00; margin-top: 20px; font-family: 'Great Vibes', cursive; font-size: 24px; text-shadow: 1px 1px 2px #000; }
    </style>
</head>
<body>

    <div class="container">
        <div class="logo-box">
            <i class="fa-solid fa-crown" style="color: #ffcc00; font-size: 30px; position: absolute; top: -20px; left: 50%; transform: translateX(-50%);"></i>
            <div class="main-text">MS <span>Cresh</span></div>
            <div class="game-text">Game</div>
        </div>

        <div class="features-bar">
            <div class="feature"><i class="fa-solid fa-bolt" style="font-size: 20px; background: #222; border-radius: 50%; padding: 5px; border: 1px solid #ffcc00;"></i> Fast<br>Withdrawal</div>
            <div class="feature"><i class="fa-solid fa-wallet" style="font-size: 20px; background: #222; border-radius: 50%; padding: 5px; border: 1px solid #ffcc00;"></i> Fast<br>Deposit</div>
            <div class="feature"><i class="fa-solid fa-shield-halved" style="font-size: 20px; background: #222; border-radius: 50%; padding: 5px; border: 1px solid #ffcc00;"></i> Safe<br>Game</div>
        </div>

        <div class="register-box">
            <div class="register-heading">
                <i class="fa-solid fa-feather-pointed" style="transform: scaleX(-1);"></i> 
                REGISTER 
                <i class="fa-solid fa-feather-pointed"></i>
            </div>
            
            <form onsubmit="return validateForm(event)">
                <div class="input-group">
                    <i class="fa-solid fa-mobile-screen"></i>
                    <input type="tel" id="mobileNumber" placeholder="MOBILE NUMBER" maxlength="10" onkeypress="return event.charCode >= 48 && event.charCode <= 57" required>
                </div>

                <div class="input-group">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" id="password" placeholder="PASSWORD" required>
                    <i class="fa-solid fa-eye-slash eye-icon" onclick="togglePassword()"></i>
                </div>

                <div class="input-group">
                    <i class="fa-solid fa-users"></i>
                    <input type="text" placeholder="INVITE CODE">
                </div>

                <button type="submit" class="btn-register" id="regBtn">
                    <i class="fa-solid fa-user-plus"></i> REGISTER <i class="fa-solid fa-arrow-right"></i>
                </button>
            </form>

            <div class="divider">OUR</div>

            <button type="button" class="btn-login" onclick="window.location.href='login.html'">
                <i class="fa-solid fa-right-to-bracket"></i> LOGIN <i class="fa-solid fa-arrow-right"></i>
            </button>
            
            <div class="footer-text">Play • Win • Earn</div>
        </div>
    </div>

    <script>
        function togglePassword() {
            var passInput = document.getElementById("password");
            var icon = document.querySelector(".eye-icon");
            if (passInput.type === "password") {
                passInput.type = "text";
                icon.classList.remove("fa-eye-slash"); icon.classList.add("fa-eye");
            } else {
                passInput.type = "password";
                icon.classList.remove("fa-eye"); icon.classList.add("fa-eye-slash");
            }
        }

        // Asli Backend API par Data bhejna (Port 5002)
        async function validateForm(event) {
            event.preventDefault();

            var mobile = document.getElementById("mobileNumber").value;
            var password = document.getElementById("password").value;
            var regBtn = document.getElementById("regBtn");

            if (mobile.length !== 10) {
                alert("Kripya sahi 10 digit ka mobile number darj karein!");
                return false;
            }

            regBtn.innerText = "PLEASE WAIT...";
            regBtn.disabled = true;

            try {
                // Backend Server ko Data bhej rahe hain
                let response = await fetch("http://localhost:5002/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ mobile: mobile, password: password })
                });

                let result = await response.json();

                if (result.success) {
                    alert("✅ " + result.message);
                    
                    // Session ke liye browser me data save karna
                    localStorage.setItem("savedMobile", mobile);
                    localStorage.setItem("userBalance", "59.00");
                    
                    window.location.href = "login.html"; 
                } else {
                    alert("❌ " + result.message); 
                    regBtn.innerHTML = '<i class="fa-solid fa-user-plus"></i> REGISTER <i class="fa-solid fa-arrow-right"></i>';
                    regBtn.disabled = false;
                }
            } catch (error) {
                alert("❌ Server se connect nahi ho paya! Kripya check karein ki node server.js chalu hai ya nahi.");
                regBtn.innerHTML = '<i class="fa-solid fa-user-plus"></i> REGISTER <i class="fa-solid fa-arrow-right"></i>';
                regBtn.disabled = false;
            }
        }
    </script>
</body>
</html>