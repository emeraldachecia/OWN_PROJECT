export const home_page = async (req, res) => {
    try {
        res.render("home-page", {
            layout: "layouts/main",
            title: "Own Project",
            script: "home-script.js",
            style: "home-style.css",
        });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ error: error.message });
    }
};