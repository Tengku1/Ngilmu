const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class courses extends Model {
        static associate(models) { }
    }

    courses.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('akademik', 'non-akademik'),
            allowNull: false
        },
        difficulty: {
            type: DataTypes.ENUM('beginner', 'intermediate', 'advanced'),
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        modified_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
    }, {
        timestamps: false,
        sequelize,
        modelName: 'courses',
        underscored: true
    });

    return courses;
};