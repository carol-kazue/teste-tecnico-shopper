"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const db_1 = __importDefault(require("../../db"));
const orders = db_1.default.define("orders", {
    name: sequelize_1.default.STRING(50),
    date: sequelize_1.default.DATE,
    id: {
        type: sequelize_1.default.INTEGER,
        AUTOINCREMENT: true,
        primaryKey: true,
    },
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});
exports.default = orders;
//# sourceMappingURL=orders.js.map