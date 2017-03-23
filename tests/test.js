module.exports = {
  'ConnectFour e2e Test' : function (client) {
    client
      .url('http://www.willwhitmey.io/ConnectFour/')
      .pause(1000);

    // expect element  to be present in 1000ms
    client.expect.element('body').to.be.present.before(1000);

    client.click('#cell1');
    client.pause(500);
    client.expect.element('#cell1').to.have.css('background-color').which.equals('rgba(0, 0, 0, 1)');

    client.click('#cell4');
    client.pause(500);
    client.expect.element('#cell4').to.have.css('background-color').which.equals('rgba(255, 0, 0, 1)');

    client.click('#cell2');
    client.pause(500);
    client.expect.element('#cell2').to.have.css('background-color').which.equals('rgba(0, 0, 0, 1)');

    client.click('#cell5');
    client.pause(500);
    client.expect.element('#cell5').to.have.css('background-color').which.equals('rgba(255, 0, 0, 1)');

    client.click('#cell3');
    client.pause(500);
    client.getAlertText();

    client.end();
  }
};
