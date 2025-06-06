В рамках проєкту (ЛР№4) розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

## Модель бізнес-об'єктів

@startuml

left to right direction


entity User <<ENTITY>> #900052
entity User.id <<NUMBER>> #ed2f9b
entity User.first_name <<TEXT>> #ed2f9b
entity User.last_name <<TEXT>> #ed2f9b
entity User.email <<TEXT>> #ed2f9b
entity User.password <<TEXT>> #ed2f9b

User.id --* User
User.first_name --* User
User.last_name --* User
User.email --* User
User.password --* User


entity MediaContent <<ENTITY>> #450561
entity MediaContent.id <<NUMBER>> #941ac9
entity MediaContent.title <<TEXT>> #941ac9
entity MediaContent.description <<TEXT>> #941ac9
entity MediaContent.body <<TEXT>> #941ac9
entity MediaContent.content_type <<TEXT>> #941ac9
entity MediaContent.created_at <<DATE>> #941ac9

MediaContent.id --* MediaContent
MediaContent.title --* MediaContent
MediaContent.description --* MediaContent
MediaContent.body --* MediaContent
MediaContent.content_type --* MediaContent
MediaContent.created_at --* MediaContent


entity Role <<ENTITY>> #055e29
entity Role.id <<NUMBER>> #10c75a
entity Role.name <<TEXT>> #10c75a
entity Role.description <<TEXT>> #10c75a

Role.id --* Role
Role.name --* Role
Role.description --* Role


entity Permission <<ENTITY>> #316e7a
entity Permission.id <<NUMBER>> #5ebed1
entity Permission.name <<TEXT>> #5ebed1

Permission.id --* Permission
Permission.name --* Permission


entity Source <<ENTITY>> #ad5a00
entity Source.id <<NUMBER>> #e6861e
entity Source.name <<TEXT>> #e6861e
entity Source.url <<TEXT>> #e6861e

Source.id --* Source 
Source.name --* Source 
Source.url --* Source


entity AnalysisResult <<ENTITY>> #8f031a
entity AnalysisResult.id <<NUMBER>> #e32040
entity AnalysisResult.created_at <<DATE>> #e32040
entity AnalysisResult.title <<TEXT>> #e32040
entity AnalysisResult.description <<TEXT>> #e32040
entity AnalysisResult.body <<TEXT>> #e32040

AnalysisResult.id --* AnalysisResult
AnalysisResult.created_at --* AnalysisResult
AnalysisResult.title --* AnalysisResult
AnalysisResult.description --* AnalysisResult
AnalysisResult.body --* AnalysisResult


entity AnalysisReport <<ENTITY>> #5b0673
entity AnalysisReport.id <<NUMBER>> #bb38e0
entity AnalysisReport.created_at <<DATE>> #bb38e0
entity AnalysisReport.title <<TEXT>> #bb38e0
entity AnalysisReport.body <<TEXT>> #bb38e0

AnalysisReport.id --* AnalysisReport
AnalysisReport.created_at --* AnalysisReport
AnalysisReport.title --* AnalysisReport
AnalysisReport.body --* AnalysisReport


entity Tag <<ENTITY>> #04378a 
entity Tag.name <<TEXT>> #3d7feb 
entity Tag.id <<NUMBER>> #3d7feb

Tag.id --* Tag 
Tag.name --* Tag


entity UserRole <<ENTITY>> #417035

entity RolePermission <<ENTITY>> #702a48

entity MediaContentSource <<ENTITY>> #804c32

entity MediaContentAnalysisResult <<ENTITY>> #592d33

entity MediaContentTag <<ENTITY>> #662923

entity AnalysisResultTag <<ENTITY>> #432b75

entity AnalysisReportTag <<ENTITY>> #1c4f3e

entity SourceTag <<ENTITY>> #3d7361


User "1.1" -- "0.*" MediaContent
User "1.1" -- "0.*" AnalysisResult
User "1.1" -- "0.*" AnalysisReport

User "1.1" -- "0.*" UserRole
UserRole "0.*" -- "1.1" Role

Role "1.1" -- "0.*" RolePermission
RolePermission "0.*" -- "1.1" Permission

MediaContent "1.1" -l- "0.*" MediaContentSource
MediaContentSource "0.*" -- "1.1" Source

MediaContent "1.1" -- "0.*" MediaContentAnalysisResult
MediaContentAnalysisResult "0.*" -- "1.1" AnalysisResult

MediaContent "1.1" -- "0.*" MediaContentTag
MediaContentTag "0.*" -- "1.1" Tag

AnalysisResult "1.1" -- "0.*" AnalysisResultTag
AnalysisResultTag "0.*" -- "1.1" Tag

AnalysisResult "1.*" -- "1.1" AnalysisReport

AnalysisReport "1.1" -- "0.*" AnalysisReportTag
AnalysisReportTag "0.*" -- "1.1" Tag

Source "1.1" -- "0.*" SourceTag
SourceTag "0.*" -- "1.1" Tag

@enduml

## ER-модель

@startuml
entity User {
    +id: Int
    +first_name: Text
    +last_name: Text
    +email: Text
    +password: Text
}

entity Role {
    +id: Int
    +name: Text
    +description: Text
}

entity Permission {
    +id: Int
    +name: Text
}

entity MediaContent {
  +id : Int
  +title : Text
  +description : Text
  +body : Text
  +content_type : Text
  +created_at : Date
  +user_id : Int
}

entity Source {
    +id: Int
    +name: Text
    +url: Text
}

entity Tag {
    +id: Int
    +name: Text
}

entity AnalysisResult {
    +id: Int
    +created_at: Date
    +title: Text
    +description: Text
    +body: Text
    +analysisReport_id: Int
}

entity AnalysisReport {
    +id: Int
    +title: Text
    +body: Text
    +created_at: Date
    +user_id: Int
}

entity MediaContentSource {
    source_id: Int
    mediaContent_id: Int
}

entity MediaContentTag {
    tag_id: Int
    mediaContent_id: Int
}

entity MediaContentAnalysisResult {
    mediaContent_id: Int
    analysisResult_id: Int
}

entity RolePermission {
    role_id: Int
    permission_id: Int
}

entity AnalysisResultTag {
    analysisResult_id: Int
    tag_id: Int
}

entity SourceTag{
    tag_id: Int
    source_id: Int
}

entity UserRole {
    user_id: Int
    role_id: Int
}

entity AnalysisReportTag {
    analysisReport_id: Int
    tag_id: Int
}


User ||--o{ UserRole
User ||--o{ MediaContent
User ||--o{ AnalysisResult
User ||--o{ AnalysisReport
UserRole }o--|| Role
Role ||--o{ RolePermission 
RolePermission }o--|| Permission 
MediaContent ||--o{ MediaContentTag
MediaContent ||--o{ MediaContentSource 
MediaContent ||--o{ MediaContentAnalysisResult
MediaContentAnalysisResult }o--|| AnalysisResult 
AnalysisResult ||--o{ AnalysisResultTag
AnalysisResult }|--|| AnalysisReport
MediaContentTag }o--|| Tag
MediaContentSource }o--|| Source
Source ||--o{ SourceTag
SourceTag }o--|| Tag
AnalysisResultTag }o--|| Tag
AnalysisReport ||--o{ AnalysisReportTag
AnalysisReportTag }o--|| Tag
@enduml

## Реляційна схема

<p align="center">
  <img src="./assets/relational_schema.png" width="1280" alt="image of the relational schema">
</p>
