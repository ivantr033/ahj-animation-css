import Collapse from './Collapse';
import Liker from './Liker';
import CallbackChat from './CallbackChat';

document.addEventListener('DOMContentLoaded', () => {
    // Collapse
    const collapseRoot = document.getElementById('collapse-widget-root');
    if (collapseRoot) {
        const collapseWidget = new Collapse(collapseRoot);
        collapseWidget.init();
    }

    // Liker
    const likerRoot = document.getElementById('liker-widget-root');
    if (likerRoot) {
        const likerWidget = new Liker(likerRoot);
        likerWidget.init();
    }

    // Callback Chat
    const callbackRoot = document.getElementById('callback-widget-root');
    if (callbackRoot) {
        const callbackWidget = new CallbackChat(callbackRoot);
        callbackWidget.init();
    }
});
