package com.jnshu.util;

import org.apache.ibatis.reflection.factory.DefaultObjectFactory;

import java.util.*;

public class MyObjectFactory extends DefaultObjectFactory {
    @Override
    public Object create(Class type) {
        return super.create(type);
    }
    @Override
    public <T> T create(Class<T> type, List<Class<?>> constructorArgTypes, List<Object> constructorArgs) {
        return super.create(type, constructorArgTypes, constructorArgs);
    }
    @Override
    public void setProperties(Properties properties) {
        Set<Object> keys = properties.keySet();
        for(Iterator<Object> i = keys.iterator(); i.hasNext();) {
            System.out.println(" ====== " + properties.get(i.next()) + " ====== ");
        }
        super.setProperties(properties);
    }
    @Override
    public <T> boolean isCollection(Class<T> type) {
        return Collection.class.isAssignableFrom(type);
    }
}
