$(document).ready(function () {
    SLOWER.admin_login.render_background();
});

if(typeof SLOWER === "undefined") SLOWER = {};
SLOWER.admin_login = (function () {

    return {
        render_background:function () {
            let config = {
                vx: 4,
                vy: 4,
                height: 2,
                width: 2,
                count: 150,
                color: "0, 150, 200",//点颜色
                stroke: "100,100,100",//线条颜色
                dist: 20000,//点吸附距离
                e_dist: 20000,//鼠标吸附加速距离
                max_conn: 10//点到点最大连接数
            };
            CanvasParticle(config);
        }
    }
})();
