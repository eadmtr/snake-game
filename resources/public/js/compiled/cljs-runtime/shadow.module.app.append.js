
shadow.cljs.devtools.client.env.module_loaded('app');

try { snake.core.init(); } catch (e) { console.error("An error occurred when calling (snake.core/init)"); throw(e); }