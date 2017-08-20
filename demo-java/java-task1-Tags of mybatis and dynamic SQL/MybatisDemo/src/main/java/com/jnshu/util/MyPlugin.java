package com.jnshu.util;

import org.apache.ibatis.executor.Executor;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.plugin.*;

import java.util.Iterator;
import java.util.Properties;
import java.util.Set;

@Intercepts({@Signature(
        type= Executor.class,
        method = "update",
        args = {MappedStatement.class,Object.class})})
public class MyPlugin implements Interceptor {
    public Object intercept(Invocation invocation) throws Throwable {
        return invocation.proceed();
    }
    public Object plugin(Object target) {
        return Plugin.wrap(target, this);
    }
    public void setProperties(Properties properties) {
        Set<Object> keys = properties.keySet();
        for(Iterator<Object> i = keys.iterator(); i.hasNext();) {
            System.out.println(" ====== " + properties.get(i.next()) + " ====== ");
        }
    }

}
