'use strict';

describe('Service: messageEntityManager', function () {

  // load the service's module
  beforeEach(module('dictanovaSearchJiApp'));

  // instantiate service
  var messageEntityManager;
  beforeEach(inject(function (_messageEntityManager_) {
    messageEntityManager = _messageEntityManager_;
  }));

  it('should do something', function () {
    expect(!!messageEntityManager).toBe(true);
  });

});
