import sequelize from  'sequelize';
import Hidrantes from '../models/Hidrantes';
import SecUser from '../models/SecUser';
import Files from '../models/Files';
import Vistorias from '../models/Vistoria';

class DashboardController {

  async hidrantesCount (req,res){
    const hidranteCount = await Hidrantes.findAll({
      attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'count_id']]
    });

    return res.json(hidranteCount);

  }
  
  

}
export default new DashboardController();
