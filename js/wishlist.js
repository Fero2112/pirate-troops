// ── Wishlist Counter ──────────────────────────────────────────────────────────
// Update WISHLIST_COUNT manually whenever you check your Steamworks dashboard.
// Change STEAM_URL to your actual Steam store page URL before going live.

const WISHLIST_COUNT = 70;
const WISHLIST_GOAL  = 200;
const STEAM_URL      = 'https://store.steampowered.com/app/YOUR_APP_ID/Pirate_Troops/';

document.addEventListener('DOMContentLoaded', function () {
    var countEl    = document.getElementById('wishlist-count');
    var fillEl     = document.getElementById('wishlist-fill');
    var steamBtn   = document.getElementById('wishlist-steam-btn');
    var percentEl  = document.getElementById('wishlist-percent');

    if (!countEl) return;

    // Set the Steam button link
    if (steamBtn) steamBtn.href = STEAM_URL;

    // Animate the counter from 0 to WISHLIST_COUNT
    var duration = 1200; // ms
    var start    = null;

    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    function animateCount(timestamp) {
        if (!start) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var current  = Math.round(easeOut(progress) * WISHLIST_COUNT);

        countEl.textContent = current;

        var pct = Math.min((current / WISHLIST_GOAL) * 100, 100);
        if (fillEl)    fillEl.style.width = pct + '%';
        if (percentEl) percentEl.textContent = Math.round(pct) + '%';

        if (progress < 1) requestAnimationFrame(animateCount);
    }

    requestAnimationFrame(animateCount);
});
