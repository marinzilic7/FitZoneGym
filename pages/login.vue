<template>
    <div class="container-fluid">
        <div class="row">
        <div class="col-md-6">
            <img src="images/login.jpg" alt="login" class="img-fluid" />
        </div>
        <div class="col-md-6">
            <form>
            <h1 class="text-center">Login</h1>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                />
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
            <p class="text-center mt-3">
                Don't have an account? <a href="/register">Register</a>
            </p>
            </form>
        </div>
        </div>
    </div>
</template>