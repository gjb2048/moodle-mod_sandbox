// https://docs.moodle.org/dev/Templates#How_do_I_call_a_template_from_javascript.3F
import Templates from 'core/templates';
import Notification from 'core/notification';
import * as Str from 'core/str';

export const render_content = () => {
    const button = document.getElementById('renderbtn');
    var context = [];
    context.name = 'Unknown';
    context.intelligence = 0;

    // Strings information on https://docs.moodle.org/dev/Useful_core_Javascript_modules#Language_strings_.28core.2Fstr.29
    Str.get_string('rendermename', 'mod_sandbox')
    .then(function(theString) {
        context.name = theString;
        button.addEventListener('click', renderContent);
    });

    /**
     * Render the content.
     */
    function renderContent() {
        Templates.render('mod_sandbox/renderme', context)
        .then(function(html, js) {
            Templates.appendNodeContents('#mod_sandbox_render', html, js);
            context.intelligence++;
        })
        .catch(function(ex) {
            Notification.exception(ex);
        });
    }
};
