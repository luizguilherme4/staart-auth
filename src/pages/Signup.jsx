import React, { useState } from "react";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    console.log(`confirm password: ${confirmPassword}`);

    return (
        <div className="container">
            <h2>Signup</h2>
            <form>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(element) => setEmail(element.target.value)}
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(element) => setPassword(element.target.value)}
                />

                <label>Password confirmation</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(element) => setConfirmPassword(element.target.value)}
                />

                <button className="button-block" type="submit">
                    Signup
                </button>
            </form>
        </div>
    );
};