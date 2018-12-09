ACM

两年　在团队中的位置　debug
数组　最大　最小　０　极值　内存

　　本着找出软件存在的问题的态度进行测试,即客观吧,不要以挑刺形象出现
　　可熟练阅读需求规格说明书等文档
　　以用户的观点看待问题
　　有着强烈的质量意识
　　细心和责任心
　　良好的有效的沟通方式（与开发人员及客户）
　　具有以往的测试经验
　　能够及时准确地判断出高危险区在何处.
  
数据库

索引的作用：

- 创建索引可以大大提高系统的性能
- 加快数据的检索速度
- 通过创建唯一性索引，可以保证数据库表中每一行数据的唯一性。 

去重
group by可以发挥空间复杂度优势
distinct空间占用较小，可以发挥时间复杂度优势

触发器： 当满足触发器条件，则系统自动执行触发器的触发体。

触发时间：有before,after.触发事件：有insert,update,delete三种。触发类型：有行触发、语句触发

1NF:每个属性是不可分的。 2NF:若关系R是１NF,且每个非主属性都完全函数依赖于R的键。例SLC(SID#, CourceID#, SNAME,Grade),则不是2NF; 3NF:若R是2NF，且它的任何非键属性都不传递依赖于任何候选键。

事务：是一系列的数据库操作，是数据库应用的基本逻辑单位。事务性质：原子性、

? 原子性。即不可分割性，事务要么全部被执行，要么就全部不被执行。

? 一致性或可串性。事务的执行使得数据库从一种正确状态转换成另一种正确状态

? 隔离性。在事务正确提交之前，不允许把该事务对数据的任何改变提供给任何其他事务，

? 持久性。事务正确提交后，其结果将永久保存在数据库中，即使在事务提交后有了其他故障，事务的处理结果也会得到保存。

产生死锁的必要条件

- 〈1〉互斥条件。即某个资源在一段时间内只能由一个进程占有，不能同时被两个或两个以上的进程占有。
- 〈2〉不可抢占条件。进程所获得的资源在未使用完毕之前，资源申请者不能强行地从资源占有者手中夺取资源，而只能由该资源的占有者进程自行释放。
- 〈3〉占有且申请条件。进程至少已经占有一个资源，但又申请新的资源；由于该资源已被另外进程占有，此时该进程阻塞；但是，它在等待新资源之时，仍继续占用已占有的资源。
- 〈4〉循环等待条件。

避免死锁:
安全序列
银行家算法

死锁后恢复:
- 最简单，最常用的方法就是进行系统的重新启动
- 撤消进程，剥夺资源。终止参与死锁的进程，收回它们占有的资源，从而解除死锁。
- 进程回退策略

```
CREATE TABLE Student(

ID NUMBER PRIMARY KEY,

NAME VARCHAR2(50) NOT NULL);//建表

CREATE VIEW view_name AS

Select * FROM Table_name;//建视图

Create UNIQUE INDEX index_name ON TableName(col_name);//建索引

INSERT INTO tablename {column1,column2,…} values(exp1,exp2,…);//插入

INSERT INTO Viewname {column1,column2,…} values(exp1,exp2,…);//插入视图实际影响表

UPDATE tablename SET name=’zang 3’ condition;//更新数据

DELETE FROM Tablename WHERE condition;//删除

GRANT (Select,delete,…) ON (对象) TO USER_NAME [WITH GRANT OPTION];//授权

REVOKE (权限表) ON(对象) FROM USER_NAME [WITH REVOKE OPTION] //撤权

列出工作人员及其领导的名字：

Select E.NAME, S.NAME FROM EMPLOYEE E S

WHERE E.SUPERName=S.Name
```