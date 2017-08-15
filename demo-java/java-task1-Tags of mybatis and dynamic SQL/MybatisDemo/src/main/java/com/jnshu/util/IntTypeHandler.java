package com.jnshu.util;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedJdbcTypes;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@MappedJdbcTypes(JdbcType.INTEGER)
public class IntTypeHandler extends BaseTypeHandler<String> {
    @Override
    public void setNonNullParameter(PreparedStatement ps, int i, String parameter, JdbcType jdbcType) throws SQLException {
        ps.setInt(i, TransferSex(parameter));
    }

    @Override
    public String getNullableResult(ResultSet rs, String columnName) throws SQLException {
        return TransferSex(rs.getInt(columnName));
    }

    @Override
    public String getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
        return TransferSex(rs.getInt(columnIndex));
    }

    @Override
    public String getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
        return TransferSex(cs.getInt(columnIndex));
    }

    public String TransferSex(int sex){
        if (sex == 1){
            return "男";
        }else{
            return "女";
        }
    }

    public int TransferSex(String sex){
        if (sex.equals("男")){
            return 1;
        }else{
            return 2;
        }
    }
}
