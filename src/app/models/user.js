import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        login: Sequelize.STRING,
        pswd: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        active: Sequelize.STRING,
        activation_code: Sequelize.STRING,
        priv_admin: Sequelize.STRING,
        usr_active: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    /*
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

*/
  }
}
export default User;