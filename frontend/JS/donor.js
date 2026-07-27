<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>LifeStream | Blood Donors</title>

    <!-- Bootstrap -->

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Font Awesome -->

    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

    <!-- Custom CSS -->

    <link rel="stylesheet" href="css/donor.css">

</head>

<body>

    <!-- =========================
            NAVBAR
    ========================== -->

    <nav class="navbar navbar-expand-lg navbar-dark bg-danger">

        <div class="container">

            <a class="navbar-brand fw-bold" href="index.html">

                ❤️ LifeStream

            </a>

            <button class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar">

                <span class="navbar-toggler-icon"></span>

            </button>

            <div class="collapse navbar-collapse" id="navbar">

                <ul class="navbar-nav ms-auto">

                    <li class="nav-item">

                        <a class="nav-link" href="index.html">Home</a>

                    </li>

                    <li class="nav-item">

                        <a class="nav-link" href="hospitals.html">Hospitals</a>

                    </li>

                    <li class="nav-item">

                        <a class="nav-link active" href="donors.html">Donors</a>

                    </li>

                    <li class="nav-item">

                        <a class="nav-link" href="blood-requests.html">Blood Requests</a>

                    </li>

                    <li class="nav-item">

                        <a class="nav-link" href="login.html">Login</a>

                    </li>

                </ul>

            </div>

        </div>

    </nav>

    <!-- =========================
            HERO SECTION
    ========================== -->

    <section class="hero-banner">

        <div class="container text-center">

            <h1>Find Blood Donors</h1>

            <p>

                Search trusted blood donors near your location.

            </p>

        </div>

    </section>

    <!-- =========================
            SEARCH SECTION
    ========================== -->

    <section class="search-section">

        <div class="container">

            <div class="search-box shadow">

                <div class="row g-3">

                    <div class="col-md-3">

                        <input
                            type="text"
                            class="form-control"
                            placeholder="Search Name">

                    </div>

                    <div class="col-md-3">

                        <select class="form-select">

                            <option>Blood Group</option>

                            <option>A+</option>

                            <option>A-</option>

                            <option>B+</option>

                            <option>B-</option>

                            <option>AB+</option>

                            <option>AB-</option>

                            <option>O+</option>

                            <option>O-</option>

                        </select>

                    </div>

                    <div class="col-md-3">

                        <select class="form-select">

                            <option>City</option>

                            <option>Mumbai</option>

                            <option>Pune</option>

                            <option>Nashik</option>

                            <option>Delhi</option>

                        </select>

                    </div>

                    <div class="col-md-3">

                        <button class="btn btn-danger w-100">

                            Search

                        </button>

                    </div>

                </div>

            </div>

        </div>

    </section>

    <!-- =========================
            DONOR LIST
    ========================== -->

    <section class="py-5">

        <div class="container">

            <div class="row">

                <!-- Donor 1 -->

                <div class="col-lg-4 col-md-6 mb-4">

                    <div class="donor-card">

                        <img src="images/donors/donor1.jpg"
                            class="donor-image">

                        <div class="donor-body">

                            <h4>Rahul Mandal</h4>

                            <span class="badge bg-danger">O+</span>

                            <span class="badge bg-success">Available</span>

                            <p class="mt-3">

                                <i class="fa-solid fa-location-dot"></i>

                                Mumbai

                            </p>

                            <p>Age : 24</p>

                            <p>Gender : Male</p>

                            <p>Last Donation : 15 Days Ago</p>

                            <p>Total Donations : 18</p>

                            <a href="donor-details.html"
                                class="btn btn-danger w-100 mb-2">

                                View Profile

                            </a>

                            <a href="create-request.html"
                                class="btn btn-outline-danger w-100">

                                ❤️ Request Blood

                            </a>

                        </div>

                    </div>

                </div>

                <!-- Donor 2 -->

                <div class="col-lg-4 col-md-6 mb-4">

                    <div class="donor-card">

                        <img src="images/donors/donor2.jpg"
                            class="donor-image">

                        <div class="donor-body">

                            <h4>Amit Sharma</h4>

                            <span class="badge bg-danger">A+</span>

                            <span class="badge bg-success">Available</span>

                            <p class="mt-3">📍 Pune</p>

                            <p>Age : 30</p>

                            <p>Gender : Male</p>

                            <p>Last Donation : 2 Months Ago</p>

                            <p>Total Donations : 26</p>

                            <a href="donor-details.html" class="btn btn-danger w-100 mb-2">View Profile</a>

                            <a href="create-request.html" class="btn btn-outline-danger w-100">❤️ Request Blood</a>

                        </div>

                    </div>

                </div>

                <!-- Donor 3 -->

                <div class="col-lg-4 col-md-6 mb-4">

                    <div class="donor-card">

                        <img src="images/donors/donor3.jpg"
                            class="donor-image">

                        <div class="donor-body">

                            <h4>Priya Patel</h4>

                            <span class="badge bg-danger">B+</span>

                            <span class="badge bg-secondary">Busy</span>

                            <p class="mt-3">📍 Nashik</p>

                            <p>Age : 27</p>

                            <p>Gender : Female</p>

                            <p>Last Donation : 1 Month Ago</p>

                            <p>Total Donations : 11</p>

                            <a href="donor-details.html" class="btn btn-danger w-100 mb-2">View Profile</a>

                            <a href="create-request.html" class="btn btn-outline-danger w-100">❤️ Request Blood</a>

                        </div>

                    </div>

                </div>

                <!-- Donor 4 -->

                <div class="col-lg-4 col-md-6 mb-4">

                    <div class="donor-card">

                        <img src="images/donors/donor4.jpg"
                            class="donor-image">

                        <div class="donor-body">

                            <h4>Neha Singh</h4>

                            <span class="badge bg-danger">AB+</span>

                            <span class="badge bg-success">Available</span>

                            <p class="mt-3">📍 Delhi</p>

                            <p>Age : 29</p>

                            <p>Gender : Female</p>

                            <p>Last Donation : 20 Days Ago</p>

                            <p>Total Donations : 21</p>

                            <a href="donor-details.html" class="btn btn-danger w-100 mb-2">View Profile</a>

                            <a href="create-request.html" class="btn btn-outline-danger w-100">❤️ Request Blood</a>

                        </div>

                    </div>

                </div>

                <!-- Donor 5 -->

                <div class="col-lg-4 col-md-6 mb-4">

                    <div class="donor-card">

                        <img src="images/donors/donor5.jpg"
                            class="donor-image">

                        <div class="donor-body">

                            <h4>Rohit Verma</h4>

                            <span class="badge bg-danger">O-</span>

                            <span class="badge bg-success">Available</span>

                            <p class="mt-3">📍 Mumbai</p>

                            <p>Age : 34</p>

                            <p>Gender : Male</p>

                            <p>Last Donation : 45 Days Ago</p>

                            <p>Total Donations : 40</p>

                            <a href="donor-details.html" class="btn btn-danger w-100 mb-2">View Profile</a>

                            <a href="create-request.html" class="btn btn-outline-danger w-100">❤️ Request Blood</a>

                        </div>

                    </div>

                </div>

                <!-- Donor 6 -->

                <div class="col-lg-4 col-md-6 mb-4">

                    <div class="donor-card">

                        <img src="images/donors/donor6.jpg"
                            class="donor-image">

                        <div class="donor-body">

                            <h4>Sneha Joshi</h4>

                            <span class="badge bg-danger">A-</span>

                            <span class="badge bg-warning text-dark">Unavailable</span>

                            <p class="mt-3">📍 Pune</p>

                            <p>Age : 31</p>

                            <p>Gender : Female</p>

                            <p>Last Donation : 3 Months Ago</p>

                            <p>Total Donations : 35</p>

                            <a href="donor-details.html" class="btn btn-danger w-100 mb-2">View Profile</a>

                            <a href="create-request.html" class="btn btn-outline-danger w-100">❤️ Request Blood</a>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>