package com.jnshu;

import com.jnshu.entity.Learner;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.util.Date;
import java.util.List;

/**
 * Hello world!
 *
 */
public class MybatisDemo {
    public static void main( String[] args ) {
        SqlSessionFactory factory=null;
        try{
            factory=new SqlSessionFactoryBuilder().build(Resources.getResourceAsStream("mybatis-config.xml"));
        }catch(IOException e){
            e.printStackTrace();
        }
        SqlSession sqlSession=factory.openSession();

        Learner learner = sqlSession.selectOne("mybatis.selectLearnerById", 1);
        System.out.println(learner);

        Learner learner1 = new Learner();
        learner1.setId(3);
        learner1.setName("有来有去");
        learner1.setSex("男");
        learner1.setAge(25);
        learner1.setSchool("麒麟山獬豸洞");
        learner1.setSalary(learner.getSalary());
        learner1.setIntro("我叫你一声你敢答应吗？");
        learner1.setCreateAt(new Date().getTime());
        learner1.setUpdateAt(new Date().getTime());
        sqlSession.update("mybatis.updateLearner", learner1);

        List<Learner> learnerList1 = sqlSession.selectList("mybatis.selectLearnerWithNameLike", learner1);
        System.out.println(learnerList1);

        Learner learner2 = new Learner();
        learner2.setId(4);
        learner2.setName("有去有来");
        learner2.setSex("男");
        learner2.setAge(35);
        learner2.setSchool("麒麟山獬豸洞");
        learner2.setSalary(learner.getSalary());
        learner2.setIntro("我的铃是太上老君的八卦炉里炼出来的");
        learner2.setCreateAt(new Date().getTime());
        learner2.setUpdateAt(new Date().getTime());
        sqlSession.update("mybatis.updateLearner", learner2);

        List<Learner> learnerList2 = sqlSession.selectList("mybatis.selectLearnerWithSchoolLike", learner2);
        System.out.println(learnerList2);

        Learner learner3 = new Learner();
        learner3.setId(5);
        learner3.setName("猪刚鬣");
        learner3.setSex("男");
        learner3.setAge(35);
        learner3.setSchool("福陵山云栈洞");
        learner3.setSalary(learner.getSalary());
        learner3.setIntro("该死的弼马温！");
        learner3.setCreateAt(new Date().getTime());
        learner3.setUpdateAt(new Date().getTime());
        sqlSession.update("mybatis.updateLearner", learner3);

        List<Learner> learnerList3 = sqlSession.selectList("mybatis.selectLearnerWithLike", learner3);
        System.out.println(learnerList3);
        List<Learner> learnerList4 = sqlSession.selectList("mybatis.selectLearnerWithWhere", learner3);
        System.out.println(learnerList4);
        List<Learner> learnerList5 = sqlSession.selectList("mybatis.selectLearnerAll");
        System.out.println(learnerList5);

        Learner learner4 = new Learner();
//        learner4.setId(6);
        learner4.setName("猪刚鬣");
        learner4.setSex("男");
        learner4.setAge(35);
        learner4.setSchool("福陵山云栈洞");
        learner4.setSalary(learner.getSalary());
        learner4.setIntro("该死的弼马温！");
        learner4.setCreateAt(new Date().getTime());
        learner4.setUpdateAt(new Date().getTime());
        sqlSession.update("mybatis.insertLearner", learner4);

        List<Learner> learnerList6 = sqlSession.selectList("mybatis.selectLearnerAll");
        System.out.println(learnerList6);
    }
}
