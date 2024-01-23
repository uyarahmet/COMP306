INSERT INTO Admin (Id, Fname, Lname)
VALUES (4, 'Ahmet', 'Uyar');

INSERT INTO Admin (Id, Fname, Lname)
VALUES (2, 'Aslıhan', 'Gülseren');

INSERT INTO Admin (Id, Fname, Lname)
VALUES (3, 'Gülbarin', 'Maçin');

INSERT INTO Realtor (Id) VALUES (2);
INSERT INTO Realtor (Id) VALUES (3);
INSERT INTO Realtor (Id) VALUES (4);

INSERT INTO Secretary (Id) VALUES (3);

INSERT INTO Listing (Lsid, Lsdate, Lsdays_since_published, Lsprice, Lsprice_per_area, Lsfrom_who, Lsland_title_status, Lsdescription, Id)
VALUES (1148345365, '2024-01-16', 6, 5400000, 43200, 'From Owner', 'condominium', 'Kagıthane merkezde boş dübleks daire sahibinden - Satılık Daire İlanları sahibinden.com\'da', 2);

INSERT INTO Home (Hid, Hroom_num, Hcity, Hneighborhood, Hfor_rent, Hfor_sale, Harea_brut, Hcombi_type, Hlang, Hlong, Harea_net, Hage_of_building, Hbathroom_num, His_inside_site, Hcurrent_use)
VALUES (1148345365, '3+1', 'Istanbul', 'Kağıthane', FALSE, TRUE, 150, 'Floor Heating', 41.085407, 28.97341, 125, 4, 1, FALSE, 'empty');

INSERT INTO Apartment (Hid, Afloor_num_of_whole_apt, Afloor_num_of_listing, Abalcony_exists, Aelevator_exists, Aautopark_type, Aautopark_exists)
VALUES (1148345365, 6, 5, TRUE, TRUE, 'Closed', TRUE);

INSERT INTO Listing (Lsid, Lsdate, Lsdays_since_published, Lsprice, Lsprice_per_area, Lsfrom_who, Lsland_title_status, Lsdescription, Id)
VALUES (1149731554, '2024-01-22', 1, 1449000, 10733, 'From Realtor', 'condominium', 'BEYLİKDÜZÜ LION YAPI\'DAN 3+1 145 M2 LÜKS DUBLEX DAİRE !!!', 2);

INSERT INTO Home (Hid, Hroom_num, Hcity, Hneighborhood, Hfor_rent, Hfor_sale, Harea_brut, Hcombi_type, Hlang, Hlong, Harea_net, Hage_of_building, Hbathroom_num, His_inside_site, Hcurrent_use)
VALUES (1149731554, '3+1', 'Istanbul', 'Esenyurt', FALSE, TRUE, 145, 'Kombi', 41.0359, 28.679001, 135, 4, 1, FALSE, 'empty');

INSERT INTO Apartment (Hid, Afloor_num_of_whole_apt, Afloor_num_of_listing, Abalcony_exists, Aelevator_exists, Aautopark_type, Aautopark_exists)
VALUES (1149731554, 4, 2, TRUE, TRUE, NULL, FALSE);

INSERT INTO Listing (Lsid, Lsdate, Lsdays_since_published, Lsprice, Lsprice_per_area, Lsfrom_who, Lsland_title_status, Lsdescription, Id)
VALUES (1148470065, '2024-01-17', 5, 4000000, 44444.44, 'From Owner', 'condominium', 'Dublex daire sıfır spor salonlu asansörlü Düşük katlı teraslı', 2);

INSERT INTO Home (Hid, Hroom_num, Hcity, Hneighborhood, Hfor_rent, Hfor_sale, Harea_brut, Hcombi_type, Hlang, Hlong, Harea_net, Hage_of_building, Hbathroom_num, His_inside_site, Hcurrent_use)
VALUES (1148470065, '3+1', 'Adana', 'Beyazevler', FALSE, TRUE, 120, 'Kombi', 36.981216, 35.363773, 90, 0, 1, FALSE, 'empty');

INSERT INTO Apartment (Hid, Afloor_num_of_whole_apt, Afloor_num_of_listing, Abalcony_exists, Aelevator_exists, Aautopark_type, Aautopark_exists)
VALUES (1148470065, 4, 3, TRUE, TRUE, 'Open', TRUE);

 
INSERT INTO Listing (Lsid, Lsdate, Lsdays_since_published, Lsprice, Lsprice_per_area, Lsfrom_who, Lsland_title_status, Lsdescription, Id)
VALUES (1148412942, '2024-01-17', 5, 1850000, 14230, 'From Owner', 'condominium', 'SAHİBİNDEN SATILIK 3+1 ARA KAT', 2);

INSERT INTO Home (Hid, Hroom_num, Hcity, Hneighborhood, Hfor_rent, Hfor_sale, Harea_brut, Hcombi_type, Hlang, Hlong, Harea_net, Hage_of_building, Hbathroom_num, His_inside_site, Hcurrent_use)
VALUES (1148412942, '3+1', 'Istanbul', 'Silivri', FALSE, TRUE, 145, 'Kombi', 41.07906, 28.094711, 130, 20, 1, TRUE, 'empty');

  
INSERT INTO Apartment (Hid, Afloor_num_of_whole_apt, Afloor_num_of_listing, Abalcony_exists, Aelevator_exists, Aautopark_type, Aautopark_exists)
VALUES (1148412942, 7, 6, TRUE, TRUE, 'Open', TRUE);

 
INSERT INTO Listing (Lsid, Lsdate, Lsdays_since_published, Lsprice, Lsprice_per_area, Lsfrom_who, Lsland_title_status, Lsdescription, Id)
VALUES (1148472142, '2024-01-17', 5, 4000000, 36364, 'From Owner', 'condominium', 'SAHİBİNDEN 3+1 LÜKS DAİRE - Satılık Daire İlanları sahibinden.com\'da', 2);

INSERT INTO Home (Hid, Hroom_num, Hcity, Hneighborhood, Hfor_rent, Hfor_sale, Harea_brut, Hcombi_type, Hlang, Hlong, Harea_net, Hage_of_building, Hbathroom_num, His_inside_site, Hcurrent_use)
VALUES (1148472142, '3+1', 'Kocaeli', 'Tatlıkuyu', FALSE, TRUE, 125, 'Kombi', 40.791885, 29.433956, 110, 0, 1, FALSE, 'empty');

  
INSERT INTO Apartment (Hid, Afloor_num_of_whole_apt, Afloor_num_of_listing, Abalcony_exists, Aelevator_exists, Aautopark_type, Aautopark_exists)
VALUES (1148472142, 4, 3, TRUE, TRUE, 'Open', TRUE);

 
INSERT INTO Listing (Lsid, Lsdate, Lsdays_since_published, Lsprice, Lsprice_per_area, Lsfrom_who, Lsland_title_status, Lsdescription, Id)
VALUES (1149450314, '2024-01-21', 1, 4125000, 37500, 'From Owner', 'construction servitude', 'YATIRIMLIK 120m2 2+1 mahmutlar 6.noter apartmanı içinde', 3);

INSERT INTO Home (Hid, Hroom_num, Hcity, Hneighborhood, Hfor_rent, Hfor_sale, Harea_brut, Hcombi_type, Hlang, Hlong, Harea_net, Hage_of_building, Hbathroom_num, His_inside_site, Hcurrent_use)
VALUES (1149450314, '2+1', 'Antalya', 'Alanya', FALSE, TRUE, 120, 'Central System', 36.543049, 32.03352, 110, 3, 2, FALSE, 'empty');

  
INSERT INTO Apartment (Hid, Afloor_num_of_whole_apt, Afloor_num_of_listing, Abalcony_exists, Aelevator_exists, Aautopark_type, Aautopark_exists)
VALUES (1149450314, 12, 7, TRUE, TRUE, 'Closed', TRUE);


INSERT INTO Listing (Lsid, Lsdate, Lsdays_since_published, Lsprice, Lsprice_per_area, Lsfrom_who, Lsland_title_status, Lsdescription, Id)
VALUES (1148674829, '2024-01-16', 6, 5400000, 43200, 'From Owner', 'Condominium', 'Kagıthane merkezde boş dübleks daire', 3);

INSERT INTO Home (Hid, Hroom_num, Hcity, Hneighborhood, Hfor_rent, Hfor_sale, Harea_brut, Hcombi_type, Hlang, Hlong, Harea_net, Hage_of_building, Hbathroom_num, His_inside_site, Hcurrent_use)
VALUES (1148674829, '3+1', 'Istanbul', 'Kağıthane', FALSE, TRUE, 150, 'Floor Heating', 41.085407, 28.97341, 125, 4, 1, FALSE, 'empty');

  
INSERT INTO Apartment (Hid, Afloor_num_of_whole_apt, Afloor_num_of_listing, Abalcony_exists, Aelevator_exists, Aautopark_type, Aautopark_exists)
VALUES (1148674829, 6, 5, TRUE, TRUE, 'Closed', TRUE);

 
INSERT INTO Listing (Lsid, Lsdate, Lsdays_since_published, Lsprice, Lsprice_per_area, Lsfrom_who, Lsland_title_status, Lsdescription, Id)
VALUES (1148485340, '2024-01-22', 6, 1315000, 11955, 'From Owner', 'Condominium', 'MUHTEŞEM ÖZEL LÜKS DEKORLU 2+1 KIŞ BALKONLU FIRSATI DAİRE!!!', 3);

INSERT INTO Home (Hid, Hroom_num, Hcity, Hneighborhood, Hfor_rent, Hfor_sale, Harea_brut, Hcombi_type, Hlang, Hlong, Harea_net, Hage_of_building, Hbathroom_num, His_inside_site, Hcurrent_use)
VALUES (1148485340, '2+1', 'Istanbul', 'Esenyurt', FALSE, TRUE, 115, 'Kombi', 41.0359, 28.679001, 110, 4, 1, FALSE, 'empty');

  
INSERT INTO Apartment (Hid, Afloor_num_of_whole_apt, Afloor_num_of_listing, Abalcony_exists, Aelevator_exists, Aautopark_type, Aautopark_exists)
VALUES (1148485340, 6, 5, TRUE, FALSE, NULL, FALSE);

INSERT INTO Listing (Lsid, Lsdate, Lsdays_since_published, Lsprice, Lsprice_per_area, Lsfrom_who, Lsland_title_status, Lsdescription, Id)
VALUES (1101511783, '2024-01-22', 1, 14750000, 38815, 'From Realtor', 'Condominium', 'SİEM\'DEN FULL DENİZ MANZARALI 6+2 MARİNADA TRİPLEX VİLLA !', 4);

INSERT INTO Home (Hid, Hroom_num, Hcity, Hneighborhood, Hfor_rent, Hfor_sale, Harea_brut, Hcombi_type, Hlang, Hlong, Harea_net, Hage_of_building, Hbathroom_num, His_inside_site, Hcurrent_use)
VALUES (1101511783, '6+2', 'Istanbul', 'Beylikdüzü', FALSE, TRUE, 400, 'Kombi', 40.985882, 28.630224, 380, 0, 6, TRUE, 'empty');

INSERT INTO Villa (Hid, Vpool_exists, Vtotal_floor_num, Vopen_area)
VALUES (1101511783, FALSE, 3, 100);


INSERT INTO Listing (Lsid, Lsdate, Lsdays_since_published, Lsprice, Lsprice_per_area, Lsfrom_who, Lsland_title_status, Lsdescription, Id)
VALUES (1142427986, '2024-01-20', 2, 21850000, 109250, 'From Owner', 'Land Title Deed', 'ANTALYA ADRASAN\'DA DOĞAL TAŞ VİLLA - Satılık Villa İlanları', 4);

INSERT INTO Home (Hid, Hroom_num, Hcity, Hneighborhood, Hfor_rent, Hfor_sale, Harea_brut, Hcombi_type, Hlang, Hlong, Harea_net, Hage_of_building, Hbathroom_num, His_inside_site, Hcurrent_use)
VALUES (1142427986, '4+2', 'Antalya', 'Kumluca', FALSE, TRUE, 250, 'Klima', 36.316666, 30.450001, 200, 0, 4, FALSE, 'occupied');

INSERT INTO Villa (Hid, Vpool_exists, Vtotal_floor_num, Vopen_area)
VALUES (1142427986, TRUE, 3, 250);

INSERT INTO Listing (Lsid, Lsdate, Lsdays_since_published, Lsprice, Lsprice_per_area, Lsfrom_who, Lsland_title_status, Lsdescription, Id)
VALUES (1147150554, '2024-01-21', 1, 1575000, 3.15, 'From Owner', 'Detached Plot', 'ANTALYA/SERİK\'TE 500 M2 VİLLA İMARLI FIRSAT ARSA', 4);

INSERT INTO Land (Lid, Larea, Lblock, Lparcel, Lzoning_status)
VALUES (1147150554, 500, '153', '5', 'Villa');

INSERT INTO Listing (Lsid, Lsdate, Lsdays_since_published, Lsprice, Lsprice_per_area, Lsfrom_who, Lsland_title_status, Lsdescription, Id)
VALUES (1149700595, '2024-01-22', 0, 1100000, 2064, 'From Owner', 'Share Deed', 'Silivri seymen yerleşim içinde müthiş konumda 533 m2', 4);

INSERT INTO Land (Lid, Larea, Lblock, Lparcel, Lzoning_status)
VALUES (1149700595, 533, '173', '84', 'Land');

INSERT INTO Listing (Lsid, Lsdate, Lsdays_since_published, Lsprice, Lsprice_per_area, Lsfrom_who, Lsland_title_status, Lsdescription, Id)
VALUES (1149682876, '2024-01-22', 0, 700, 2333, 'From Owner', 'Condominium', 'Kaş Patara da kiralık butik otel', 4);

INSERT INTO Hotel (Htid, Htname, Htlocation)
VALUES (1149682876, 'Kaş Otel', 'Kaş');

INSERT INTO Listing (Lsid, Lsdate, Lsdays_since_published, Lsprice, Lsprice_per_area, Lsfrom_who, Lsland_title_status, Lsdescription, Id)
VALUES (1149725899, '2024-01-22', 0, 655000, 3270, 'From Owner', 'Condominium', 'SAHİBİNDEN KURULU MÜŞTERİLİ YAPILI GÜZELLİK MERKEZİ', 4);

INSERT INTO Commercial_Property (Cid, Cfloor_num_of_listing, Ctotal_floor_num, Carea_net, Carea_brut, Cage_of_building, Croom_num)
VALUES (1149725899, 3, 4, 200, 220, 30, 5);

INSERT INTO Contains (Lsid, Hid, Cid, Htid, Lid) VALUES (1148345365, 1148345365, NULL, NULL, NULL);
INSERT INTO Contains (Lsid, Hid, Cid, Htid, Lid) VALUES (1149731554, 1149731554, NULL, NULL, NULL);
INSERT INTO Contains (Lsid, Hid, Cid, Htid, Lid) VALUES (1148470065, 1148470065, NULL, NULL, NULL);
INSERT INTO Contains (Lsid, Hid, Cid, Htid, Lid) VALUES (1148412942, 1148412942, NULL, NULL, NULL);
INSERT INTO Contains (Lsid, Hid, Cid, Htid, Lid) VALUES (1148472142, 1148472142, NULL, NULL, NULL);
INSERT INTO Contains (Lsid, Hid, Cid, Htid, Lid) VALUES (1149450314, 1149450314, NULL, NULL, NULL);
INSERT INTO Contains (Lsid, Hid, Cid, Htid, Lid) VALUES (1148674829, 1148674829, NULL, NULL, NULL);
INSERT INTO Contains (Lsid, Hid, Cid, Htid, Lid) VALUES (1148485340, 1148485340, NULL, NULL, NULL);
INSERT INTO Contains (Lsid, Hid, Cid, Htid, Lid) VALUES (1101511783, 1101511783, NULL, NULL, NULL);
INSERT INTO Contains (Lsid, Hid, Cid, Htid, Lid) VALUES (1142427986, 1142427986, NULL, NULL, NULL);
INSERT INTO Contains (Lsid, Hid, Cid, Htid, Lid) VALUES (1147150554, NULL, NULL, NULL, 1147150554);
INSERT INTO Contains (Lsid, Hid, Cid, Htid, Lid) VALUES (1149700595, NULL, NULL, NULL, 1149700595);
INSERT INTO Contains (Lsid, Hid, Cid, Htid, Lid) VALUES (1149682876, NULL, NULL, 1149682876, NULL);
INSERT INTO Contains (Lsid, Hid, Cid, Htid, Lid) VALUES (1149725899, NULL, 1149725899, NULL, NULL);