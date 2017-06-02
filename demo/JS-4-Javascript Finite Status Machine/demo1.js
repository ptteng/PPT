/**
 * Created by msi on 2017/5/31.
 */
var Switch = function ($elem) {
    var log = function (from, to) {
            console.log('currentState is : ' + to + ((from || '') && (' , and previous state is : ' + from)));
        },
        fsm = StateMachine.create({
                initial: 'off',
                events: [
                    {name: 'turnOn', from: 'off', to: 'on'},
                    {name: 'turnOff', from: 'on', to: 'off'}
                ],
                callbacks: {
                    onafterturnOn: function(event, from ,to){
                        $elem.addClass('on');
                        log(from, to);
                    },
                    onafterturnOff: function(event, from, to) {
                        $elem.removeClass('on');
                        log(from, to);
                    }
                }
            }
        );
    $elem.on('click', function(){
        fsm[fsm.transitions()[0]]();
    });

    log(undefined, fsm.current);

    return fsm;
};