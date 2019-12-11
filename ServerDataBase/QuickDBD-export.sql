-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/p9z1K9
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


SET XACT_ABORT ON

BEGIN TRANSACTION QUICKDBD

CREATE TABLE [Insumos.DB] (
    [dataBaseId] int  NOT NULL , --ID on Database
    [name] nvarchar  NOT NULL , --Name of product
    [modal] smallint  NOT NULL ,--Its modal
    [country] smallint  NOT NULL ,--Its origin country
    [description] smallint  NOT NULL ,--Its origin country
    [created_by] usuario  NOT NULL ,
    [createdAt] date  NOT NULL ,
    CONSTRAINT [PK_files] PRIMARY KEY CLUSTERED (
        [id] ASC
    )
)