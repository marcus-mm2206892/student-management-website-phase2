"use client"
import Head from "next/head";
import { useEffect } from "react";
import styles from '../app/styles/login-page.module.css';
import ThemeResponsiveLogo from "./components/ThemeResponsiveLogo";

export default function LoginPage() {

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

            <div className={styles["form-content"]}>
              <div className={styles["text-input"]}>
                <div className={styles["input-wrapper"]}>
                  <i className="bx bx-envelope"></i>
                  <input
                    autoComplete="off"
                    id="username"
                    type="email"
                    className={styles["input-field"]}
                    placeholder="someone@qu.com"
                    required
                  />
                </div>
              </div>

              <div className={styles["text-input"]}>
                <div className={styles["input-wrapper"]}>
                  <i className="bx bx-lock"></i>
                  <input
                    autoComplete="off"
                    id="password"
                    type="password"
                    className={styles["input-field"]}
                    placeholder="password"
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
                <div className={styles["forgot-password-div"]}>
                  <a href="#">Forgot Password?</a>
                </div>
              </div>

              <div className={styles["input-box"]}>
                <button className={styles["input-submit"]}>
                  <span>Sign In</span>
                  <i className="bx bx-right-arrow-alt"></i>
                </button>
              </div>
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