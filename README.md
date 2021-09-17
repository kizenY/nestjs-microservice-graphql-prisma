# nestjs-microservice-graphql-prisma
一个使用Nestjs搭建的微服务简易Demo项目，融合graphql、prisma等技术，同时做到尽量完善的单元测试覆盖。
本项目以 投标系统 作为设想需求，使用者分为管理员、供应商、评标人三种角色，主要数据为 项目、用户。
A demo microservice program build by Nestjs .It combines of graphql,prisma and so on techs, while pretending to cover all with uint test.
In terms of hypothetical function, the program was designed for biding, and has three charactors: manager,supplier, evaluator.

# 微服务组件 microserver components
gateway(网关)：面向功能需求，专心设计graphql schema；直接面对客户端，组织后端不同的数据来源；记录请求数据;
tender(业务服)： 主要与数据库交互，处理较复杂的业务逻辑。
auth(鉴权)： 判断用户是否有权限请求该数据。

gateway: Facing the business function, focus on designing graphql schema, combines datas from other components and returns to client.The extral function is record network request info.
tender: Facing the database, handles complex business logic.
auth: Juding if the user is authorized of requesting data. 
