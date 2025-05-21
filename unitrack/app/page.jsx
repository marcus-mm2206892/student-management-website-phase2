"use client";

import Head from "next/head";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { signIn } from "next-auth/react";
import styles from "../app/styles/login-page.module.css";
import ThemeResponsiveLogo from "./components/ThemeResponsiveLogo";
import { getUserByEmailAction } from "./action/server-actions";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  const handleLogin = async (e) => {
    
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: username,
      password,
    });
    console.log(result);
  
    if (result.ok) {
      const user = await getUserByEmailAction(username); 
      localStorage.setItem("user", JSON.stringify(user));
      document.cookie = `user=${JSON.stringify(user)}; path=/; max-age=3600`; // 1 hour expiry
      router.push(`/${user.role}/home`);
    } else {
      alert("Invalid credentials");
    }
    if (result.error) {
    alert(result.error);
    }

  };


  return (
    <>
      <Head>
        <title>UniTrack | Login</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
      </Head>
      
      <div className={styles["main-page"]}>
        <ThemeResponsiveLogo
          type="text"
          className={styles["unitrack-logo-text"]}
        />

        <section className={styles["form-col"]}>
          <div className={styles["login-form"]}>
            <div className={styles["form-header"]}>
              <h1>Sign in</h1>
              <p>
                <span>Welcome back! 👋</span>
                <br />
                Please log in with your university account.
              </p>
            </div>

            <form onSubmit={handleLogin} className={styles["form-content"]}>
              <div className={styles["text-input"]}>
                <div className={styles["input-wrapper"]}>
                  <i className="bx bx-envelope"></i>
                  <input
                    autoComplete="off"
                    type="email"
                    className={styles["input-field"]}
                    placeholder="someone@qu.com"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className={styles["text-input"]}>
                <div className={styles["input-wrapper"]}>
                  <i className="bx bx-lock"></i>
                  <input
                    autoComplete="off"
                    type="password"
                    className={styles["input-field"]}
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className={styles["login-options-div"]}>
                <div className={styles["remember-me-div"]}>
                  <input
                    type="checkbox"
                    id="remember-me"
                    className={styles["remember-me"]}
                  />
                  <label htmlFor="remember-me">Remember Me</label>
                </div>
                {/* <div className={styles["forgot-password-div"]}>
                  <a href="#">Forgot Password?</a>
                </div> */}
              </div>

              <div className={styles["input-box"]}>
                <button type="submit" className={styles["input-submit"]}>
                  <span>Sign In</span>
                  <i className="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            </form>

            <div className={styles["divider-or"]}>
              <hr />
              <span>OR</span>
              <hr />
            </div>

            <div className={styles["social-login-buttons-div"]}>
              <button
                type="button"
                className={styles["auth-login"]}
                onClick={() =>
                  signIn("google", { callbackUrl: "/third-party-handler" })
                }
              >
                <i className="fab fa-google" style={{ marginRight: "0.5rem" }}></i>
                Sign in with Google
              </button>
              <button
                type="button"
                className={styles["auth-login"]}
                onClick={() =>
                  signIn("github", { callbackUrl: "/third-party-handler" })
                }
              >
                <i className="fab fa-github" style={{ marginRight: "0.5rem" }}></i>
                Sign in with GitHub
              </button>
            </div>

          </div>

            
        </section>

        <section className={styles["welcome-col"]}>
          <img
            className={styles["welcome-graphic"]}
            src="/assets/imgs/unitrack-images/login-page-graphic.png"
            alt="University Student on the Computer"
          />
          <div>
            <h1 className={styles["tagline"]}>Your Path, Your Progress</h1>
            <p className={styles["tagline-description"]}>
              Manage courses, track progress, and stay on top of your academic
              journey with <span>UniTrack</span>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
