const express = require("express");
require("dotenv").config();
const router = express.Router();
const { verifyToken, getUserIdInRefreshToken } = require("../utils/jwt");

router.get("/", (req, res) => {
    res.render("main", { title: "main", currentPage: "/" });
});

router.get("/mypage", async (req, res) => {
    console.log("mypage router", await getUserIdInRefreshToken(req));
    res.render("mypage", {
        userId: await getUserIdInRefreshToken(req),
    });
});

router.get("/login", async (req, res) => {
    res.render("login", { userId: await getUserIdInRefreshToken(req) });
});

router.get("/join", (req, res) => {
    res.render("join");
});

router.get("/recipe", async (req, res) => {
    res.render("recipe", { userId: await getUserIdInRefreshToken(req) });
});

router.get("/sugardiary", async (req, res) => {
    res.render("sugardiary", { userId: await getUserIdInRefreshToken(req) });
});

router.get("/recipe-details", (req, res) => {
    res.render("recipe_details");
});

router.get("/mealrecord", (req, res) => {
    res.render("mealrecord");
});

router.get("/report/:type", (req, res) => {
    res.render("report");
});

router.get("/recipe-list", async (req, res) => {
    res.render("recipe_list", {
        userId: await getUserIdInRefreshToken(req),
    });
});

router.get("/bs", (req, res) => {
    res.render("bs");
}); // 김희은

router.get("/exercise", (req, res) => {
    res.render("exercise");
}); // 김희은

// 회원 정보 수정 페이지
router.get("/modify", async (req, res) => {
    res.render("modify", {
        userId: await getUserIdInRefreshToken(req),
    });
});

router.get("/foodnutrition", (req, res) => {
    res.render("foodnutrition");
}); // 음식영양정보 풍규

router.get("/weight", (req, res) => {
    res.render("weight");
}); // 체중기록 풍규

// 비밀번호 재설정 폼 페이지
router.get("/reset-password-form", (req, res) => {
    res.render("reset_password_form");
});

// 비밀번호 재설정 페이지
router.get("/reset-password/:token", async (req, res) => {
    const { token } = req.params;

    // 토큰이 정상적인지 확인
    try {
        await verifyToken(token, process.env.RESET_PASSWORD_TOKEN_SECRET);
        res.render("reset_password");
    } catch (e) {
        res.render("reset_password_error");
    }
});
// 체중기록 페이지
router.get("/bloodpressurelog", (req, res) => {
    res.render("bloodpressurelog");
});

module.exports = router;
