"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailsService = /** @class */ (function () {
    function EmailsService() {
    }
    EmailsService.prototype.sendMail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("Email enviado para " + to.name + ": " + message.subject);
    };
    return EmailsService;
}());
exports.default = EmailsService;
