<?php 
/* 
config.php 
Copyright 2011 OmniUpdate, Inc. 
All Rights Reserved. 
*/

$site_uuids = array(
"AHSS_Lamont" => "831220e3-21da-4912-ad2b-fb7f68171ffb",
"AHSS_CWLC" => "4c219963-73f7-4979-90f4-be5c27300c74",
"AHSS_GWST" => "3d3ac915-d06a-4309-b423-05add6032761",
"AHSS_IPPS" => "998019cf-992e-4cfa-9c40-1f2d6dd90f29",
"AHSS_Main" => "8cfb2fae-4fb4-487e-8ed8-1378e2cf845b",
"AHSS_MFJS" => "39d97e27-c05c-442c-ac17-72d2aebf9811",
"AHSS_Philosophy" => "4455ec2d-7897-47b5-82f8-27af54dce7c3",
"AHSS_Psychology_CouplesResearch" => "757222fa-477b-4a2e-8e54-1616d26ed8aa",
"AHSS_Polisci" => "839f5869-892d-4b56-be03-0d829ad9ca46",
"AHSS_Religious_Studies" => "19ce2755-27d2-4b03-af73-b9ea5508c6a7",	
"AHSS_Sociology" => "b527c7de-922f-4848-bb1f-180a6ad799d9",
"Bridge_Project" => "f1074d94-697e-4dfc-b719-46173d506f71",
"Calendar" => "77e4d343-fd56-47d1-8ace-7790ae4503b7",
"campussafety" => "00a38fd6-ccac-4478-84c1-8482d25e6667",
"chancellor" => "07bec4f3-c79e-4ba3-83d0-6cb15c193454",
"Colorado_Womens_College" => "cc9dd0d6-8271-40df-ac15-f717de488676",
"Compliance_InternalAudit" => "89430ca6-ab03-4bc2-b439-c10a836ebba1",
"Conflict_Resolution" => "b62a4295-e31c-4933-9cd2-4ed07d68f7df",
"CWLC" => "063a720d-b7a9-4adc-ace6-6c09583a8086",
"DU_Main" => "6cdc4782-814a-4c63-ace7-c6bd9386cc80",
"Event_Services" => "ed5a6894-d152-4101-ad7d-aa6799ff77d1",
"Graduate_Tax" => "a13abae9-064f-4950-9a86-346043234213",
"gssw" => "1f097ac9-75f6-41a0-9c3b-d691e2afa5a4",
"GSSW-IHAC" => "8eb01b4b-b545-4805-b971-6b0541b0e633",
"HCC" => "1759931f-8cf5-4615-9739-d01ea5c10520",
"Human_Resources" => "73f295c5-5537-4734-8b01-52e47f7576f7",
"institute_gifted" => "511d8b35-6287-4871-878a-0e4416e40d21",
"Korbel_China_Center" => "d1a4cb9e-c107-4141-b594-31b373b775a5",
"korbel_school" => "a40c7350-536b-441b-846d-2f4143ca97da",
"korbel_sie_center" => "27f5d2d3-57e3-4726-856a-72d65627e610",
"korbel_sie_tipss" => "a8c7b4e5-bdbb-41e6-b40d-119e38651ae8",
"Multicultural_Excellence" => "28a9ca05-851b-4f8e-913e-0e183f046266",
"nsm" => "0a10dfa9-2aa7-4469-ab31-0af2bc1385e8",
"Office_Of_Registrar" => "8c22a711-c1b8-4c0b-af4d-595035ab4fa0",
"Student_Life_LEP" => "66834a91-9069-42b3-bf2c-b12fa05dd97a",
"Professional_Psychology" => "e236a5c1-6df3-4658-a078-6b2f480b009f",
"Research_Scholarships" => "a0009543-fba9-4a18-ae36-c18994cd33f3",
"Risk_Management" => "a8656a0f-9787-464a-b031-22907b2cd10f",
"RSECS_MME" => "678691cb-b084-478a-8e38-af8551af78b8",
"SOCA" => "56835412-e13f-45f6-8854-a76d09260da8",
"staff" => "9ec3e838-b7fd-4979-ba99-a904f417a430",
"Strategic_Issues" => "7b223426-c7f0-4511-b4f3-19aa50712dd3",
"studentlife_advising" => "8db01629-19db-4fff-a912-5d4a9a232b13",
"Sustainability" => "00b633a6-bbc9-4d14-a664-b5be79d7f1cb",
"ucomm" => "d04fb9ba-aca6-4c34-9b9b-57efad9cc50b",
"university_libraries" => "ecdf3e7f-49db-4815-8859-f8f50939960a",
"UTS_Training" => "6310ba61-1cbd-422a-81ec-8e7c3a3c07dd"
);

$site_name=$_POST['site_name'];

$site_uuid=$site_uuids[$site_name];

//Place your custom values here.

//Example: 
//$_ENV['ldp_conf']['site_uuid'] = UNIQUE_SITE_ID
$_ENV['ldp_config']['site_uuid'] = $site_uuid;

?>
