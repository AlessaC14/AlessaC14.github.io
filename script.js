/* script.js — Field Journal of Artificial Systems */
(function () {
  'use strict';

  /* ── Kermit modal ──────────────────────────────────────── */
  function initKermitModal() {
    var trigger  = document.querySelector('.green-word');
    var backdrop = document.getElementById('kermit-modal');
    if (!trigger || !backdrop) return;

    var closeBtn = backdrop.querySelector('.modal-close');

    function openModal() {
      backdrop.classList.add('open');
      backdrop.removeAttribute('aria-hidden');
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      backdrop.classList.remove('open');
      backdrop.setAttribute('aria-hidden', 'true');
      trigger.focus();
    }

    trigger.addEventListener('click', openModal);
    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(); }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
    });

    /* trap focus inside modal */
    backdrop.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !backdrop.classList.contains('open')) return;
      var focusable = backdrop.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      var first = focusable[0];
      var last  = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ── Current-page nav highlight ───────────────────────── */
  function highlightCurrentPage() {
    var page  = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.nav-links a');
    links.forEach(function (a) {
      var href = (a.getAttribute('href') || '').split('/').pop();
      if (href === page || (page === '' && href === 'index.html')) {
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ── Scroll fade-in ────────────────────────────────────── */
  function initFadeIn() {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    var els = document.querySelectorAll('.fade-in');
    if (!els.length || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    els.forEach(function (el) { io.observe(el); });
  }

  /* ── Init ──────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    initKermitModal();
    highlightCurrentPage();
    initFadeIn();
  });
}());
