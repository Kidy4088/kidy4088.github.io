# Mybatis-Plus

## 一.概述

- 是对 MyBatis 框架的二次封装和扩展
- 启动时会自动注入基本 CRUD
- Mapper 对应的 xml 可以热加载,提高开发效率
- 避免 Sql 注入,内置 Sql 注入内容剥离器

## 二.SpringBoot 配置

```yaml
# Mybatis-Plus 配置
mybatis-plus:
  # mapper-locations: classpath:/mapper/*Mapper.xml
  # 实体扫描,多个package用逗号或分号分隔
  type-aliases-package: com.tensquare.article.pojo
  configuration:
    map-underscore-to-camel-case: true # 是否开启自动驼峰命名规则映射 默认值：true
    cache-enabled: true # 配置的缓存的去全局开关 默认值：true
    aggressive-lazy-loading: true # 延迟懒加载的开关 默认值：true
    multiple-result-sets-enabled: true # 开启延时加载,否则按需加载 默认值：true
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl # 打印sql语句使用
  global-config:
    db-config:
      id-type: assign_id # 全局主键策略使用雪花
```

## 三.继承 BaseMapper

```java
public interface ArticleMapper extends BaseMapper<Article> {
}
```

## 四.方法调用

```java
articleMapper.selectList(null) # 查询全部
```

## 五.分页

- 添加分页拦截器

```java
@Configuration
public class MybatisPlusConfig {

 @Bean
 public PaginationInterceptor createPaginationInterceptor() {
  return new PaginationInterceptor();
 }

```

- 设置分页

```java
Page<Article> pageData = new Page<>(page, size);

articleMapper.selectPage(pageData, wrapper);
```
