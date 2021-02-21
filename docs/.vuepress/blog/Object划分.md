# Object划分

## 1.PO (Persistant Object) 持久对象

PO 就是对应数据库中某一张表中的一条记录,多个记录可以用 PO 的集合, PO 中不应该包含任何对数据库的操作.

## 2.DO (Domain Object) 领域对象

就是现实世界中抽象出来的有形或无形的业务实体.

## 3.TO (Transfer Object) 数据传输对象

不同的应用程序之间的传输对象

## 4.DTO (Data Transfer Object) 数据传输对象

## 5.VO (View Object) 视图对象

接收页面传递来的数据封装对象,将业务处理完成的对象,封装成页面要用的数据

## 6.BO (Business Object) 业务对象

## 7.POJO (plain ordinary java object) 简单无规则 java 对象

## 8.DAO (data access object) 数据访问对象