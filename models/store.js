import db from "../db/db.js"
import { DataTypes } from 'sequelize'

const Store = db.define("store", {
    id: {
        type: DataTypes.INTEGER(),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(120),
        allowNull: false
    }
})

export default Store
