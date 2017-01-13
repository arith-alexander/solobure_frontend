/**
 * Created by arith-alexander on 2017/01/13.
 */

export function configure(aurelia) {
    aurelia.use.basicConfiguration();
    aurelia.start().then(() => aurelia.setRoot());
}