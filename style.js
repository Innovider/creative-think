
$('.btn').click(function () {

    $('#apple').css('color', 'brown')

    let apple = `<svg id="apple" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="cornflowerblue" class="bi bi-apple" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                </svg>`

    // let randomRow = Math.round(Math.random() * 5);
    // let randomCell = Math.round(Math.random() * 5);

    // randomRow = randomRow == 0 ? 5 : randomRow;
    // randomCell = randomCell == 0 ? 5 : randomCell;

    let position = 33;

    let destination = ['вверх', 'вправо', 'вниз', 'влево'];

    $(`.cell${position}`).append(apple);

    let i = 0;

    let interval = setInterval(function () {

        i++;

        $('.cell>#apple').remove();

        let randomDestination = Math.round(Math.random() * 3);

        $('.play').html(`<audio  autoplay autobuffer id="soundcard"><source src="${destination[randomDestination]}.ogg" /><source src="${destination[randomDestination]}.mp3" /></audio>`);
        $("#soundcard").play();

        if (randomDestination == 0) {
            position = position - 10;
        } else if (randomDestination == 1) {
            position = position + 1;
        } else if (randomDestination == 2) {
            position = position + 10;
        } else {
            position = position - 1;
        }

        $(`.cell${position}`).append(apple);

        // console.log(position);
        // console.log(position.toString().indexOf(0) > -1)
        // console.log(position.toString().indexOf(6) > -1)

        if (i == 10 || position.toString().indexOf(0) > -1 || position.toString().indexOf(6) > -1) {
            clearInterval(interval);
            setTimeout(function () {
                $('.play').html(`<audio  autoplay autobuffer id="soundcard"><source src="stop.ogg" /><source src="stop.mp3" /></audio>`);
                $("#soundcard").play();
            }, 3000)
        }
    }, 3000);
});

$('.cell').click(function () {
    $(this).css('background-color', 'white')
})