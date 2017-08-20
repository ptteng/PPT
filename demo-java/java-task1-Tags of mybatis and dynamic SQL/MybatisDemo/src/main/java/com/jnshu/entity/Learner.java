package com.jnshu.entity;

import org.apache.ibatis.type.Alias;
import org.json.JSONArray;

@Alias("learner")
public class Learner {
    private int id;
    private String name;
    private String sex;
    private int age;
    private String school;
    private JSONArray salary;
    private String intro;
    private Long createAt;
    private Long updateAt;

//    public Learner(int id, String name, String sex, int age, String school, String salary, String intro){
//        setId(id);
//        setName(name);
//        setSex(sex);
//        setAge(age);
//        setSchool(school);
//        setSalary(salary);
//        setIntro(intro);
//    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getSex() {
        return sex;
    }
    public void setSex(String sex) {
        this.sex = sex;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getSchool() {
        return school;
    }
    public void setSchool(String school) {
        this.school = school;
    }
    public JSONArray getSalary() {
        return salary;
    }
    public void setSalary(JSONArray salary) {
        this.salary = salary;
    }
    public String getIntro() {
        return intro;
    }
    public void setIntro(String intro) {
        this.intro = intro;
    }
    public Long getCreateAt() {
        return createAt;
    }
    public void setCreateAt(Long createAt) {
        this.createAt = createAt;
    }
    public Long getUpdateAt() {
        return updateAt;
    }
    public void setUpdateAt(Long updateAt) {
        this.updateAt = updateAt;
    }

    @Override
    public String toString() {
        return "id:"+getId()+"\n"+"name:"+getName()+"\n"+"sex:"+getSex()+"\n"+"age:"+getAge()+"\n"+"school:"+getSchool()+
                "\n"+"salary:"+getSalary()+"\n"+"intro:"+getIntro()+"\n"+"createAt:"+getCreateAt()+"\n"+"updateAt:"+getUpdateAt();
    }
}
