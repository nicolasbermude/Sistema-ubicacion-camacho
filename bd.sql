--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.10
-- Dumped by pg_dump version 10.4

-- Started on 2018-11-01 17:36:03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12387)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2172 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 185 (class 1259 OID 16892)
-- Name: chat; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chat (
    id_chat integer NOT NULL,
    cha_descripcion character varying(255) NOT NULL,
    id_clase integer NOT NULL,
    id_usuario integer NOT NULL
);


ALTER TABLE public.chat OWNER TO postgres;

--
-- TOC entry 186 (class 1259 OID 16895)
-- Name: clase; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clase (
    id_clase integer NOT NULL,
    cla_nombre character varying(50) NOT NULL,
    cla_descripcion character varying(255) NOT NULL,
    cla_estado boolean NOT NULL
);


ALTER TABLE public.clase OWNER TO postgres;

--
-- TOC entry 188 (class 1259 OID 16901)
-- Name: detallechat; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.detallechat (
    id_detallechausu integer NOT NULL,
    id_usuario integer NOT NULL,
    id_chat integer NOT NULL
);


ALTER TABLE public.detallechat OWNER TO postgres;

--
-- TOC entry 189 (class 1259 OID 16904)
-- Name: evento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.evento (
    id_evento integer NOT NULL,
    eve_mensaje character varying(254) NOT NULL,
    eve_hora time without time zone NOT NULL,
    eve_fecha date NOT NULL,
    eve_estado boolean NOT NULL,
    id_usuario integer NOT NULL,
    id_clase integer NOT NULL
);


ALTER TABLE public.evento OWNER TO postgres;

--
-- TOC entry 190 (class 1259 OID 16907)
-- Name: lugar; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lugar (
    id_lugar integer NOT NULL,
    lug_nombre character varying(50) NOT NULL,
    lug_descripcion character varying(255) NOT NULL,
    lug_latitud numeric(18,4) NOT NULL,
    lug_longitud numeric(18,4) NOT NULL,
    lug_fecha date NOT NULL,
    lug_estado boolean NOT NULL
);


ALTER TABLE public.lugar OWNER TO postgres;

--
-- TOC entry 191 (class 1259 OID 16910)
-- Name: mensaje; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mensaje (
    id_mensaje integer NOT NULL,
    men_descripcion character varying(255) NOT NULL,
    men_hora time without time zone NOT NULL,
    men_fecha date NOT NULL,
    id_usuario integer NOT NULL,
    id_chat integer NOT NULL
);


ALTER TABLE public.mensaje OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 16898)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    usu_nombre character varying(50) NOT NULL
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 2158 (class 0 OID 16892)
-- Dependencies: 185
-- Data for Name: chat; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chat (id_chat, cha_descripcion, id_clase, id_usuario) FROM stdin;
\.


--
-- TOC entry 2159 (class 0 OID 16895)
-- Dependencies: 186
-- Data for Name: clase; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clase (id_clase, cla_nombre, cla_descripcion, cla_estado) FROM stdin;
\.


--
-- TOC entry 2161 (class 0 OID 16901)
-- Dependencies: 188
-- Data for Name: detallechat; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.detallechat (id_detallechausu, id_usuario, id_chat) FROM stdin;
\.


--
-- TOC entry 2162 (class 0 OID 16904)
-- Dependencies: 189
-- Data for Name: evento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.evento (id_evento, eve_mensaje, eve_hora, eve_fecha, eve_estado, id_usuario, id_clase) FROM stdin;
\.


--
-- TOC entry 2163 (class 0 OID 16907)
-- Dependencies: 190
-- Data for Name: lugar; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lugar (id_lugar, lug_nombre, lug_descripcion, lug_latitud, lug_longitud, lug_fecha, lug_estado) FROM stdin;
\.


--
-- TOC entry 2164 (class 0 OID 16910)
-- Dependencies: 191
-- Data for Name: mensaje; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.mensaje (id_mensaje, men_descripcion, men_hora, men_fecha, id_usuario, id_chat) FROM stdin;
\.


--
-- TOC entry 2160 (class 0 OID 16898)
-- Dependencies: 187
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (id_usuario, usu_nombre) FROM stdin;
\.


--
-- TOC entry 2024 (class 2606 OID 16914)
-- Name: chat pk_chat; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat
    ADD CONSTRAINT pk_chat PRIMARY KEY (id_chat);


--
-- TOC entry 2026 (class 2606 OID 16916)
-- Name: clase pk_clase; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clase
    ADD CONSTRAINT pk_clase PRIMARY KEY (id_clase);


--
-- TOC entry 2030 (class 2606 OID 16920)
-- Name: detallechat pk_detallechat; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detallechat
    ADD CONSTRAINT pk_detallechat PRIMARY KEY (id_detallechausu);


--
-- TOC entry 2032 (class 2606 OID 16922)
-- Name: evento pk_evento; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento
    ADD CONSTRAINT pk_evento PRIMARY KEY (id_evento);


--
-- TOC entry 2034 (class 2606 OID 16924)
-- Name: mensaje pk_mensaje; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mensaje
    ADD CONSTRAINT pk_mensaje PRIMARY KEY (id_mensaje);


--
-- TOC entry 2028 (class 2606 OID 16918)
-- Name: usuario pk_usuario; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT pk_usuario PRIMARY KEY (id_usuario);


--
-- TOC entry 2035 (class 2606 OID 16925)
-- Name: detallechat fk_detallechat_chat; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detallechat
    ADD CONSTRAINT fk_detallechat_chat FOREIGN KEY (id_chat) REFERENCES public.chat(id_chat);


--
-- TOC entry 2036 (class 2606 OID 16930)
-- Name: detallechat fk_detallechat_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detallechat
    ADD CONSTRAINT fk_detallechat_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- TOC entry 2037 (class 2606 OID 16935)
-- Name: evento fk_evento_clase; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento
    ADD CONSTRAINT fk_evento_clase FOREIGN KEY (id_clase) REFERENCES public.clase(id_clase);


--
-- TOC entry 2038 (class 2606 OID 16940)
-- Name: evento fk_evento_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.evento
    ADD CONSTRAINT fk_evento_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- TOC entry 2039 (class 2606 OID 16945)
-- Name: mensaje fk_mensaje_chat; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mensaje
    ADD CONSTRAINT fk_mensaje_chat FOREIGN KEY (id_chat) REFERENCES public.chat(id_chat);


--
-- TOC entry 2040 (class 2606 OID 16950)
-- Name: mensaje fk_mensaje_usuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mensaje
    ADD CONSTRAINT fk_mensaje_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


-- Completed on 2018-11-01 17:36:03

--
-- PostgreSQL database dump complete
--

