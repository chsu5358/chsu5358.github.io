### Unified Information Extraction and Data Mining

<p class="desc" markdown="1">
Although information extraction and data mining appear together in many applications, their interface in most current deployments would better be described as serial juxtaposition than as tight integration. Information extraction populates slots in a database by identifying relevant subsequences of text, but is usually not aware of the emerging patterns and regularities in the database. Data mining methods begin from a populated database, and are often unaware of where the data came from, or its inherent uncertainties. The result is that the accuracy of both suffers, and significant mining of complex text sources is beyond reach.
     
We have been researching relational probabilistic models that [unify extraction and mining](http://www.cs.umass.edu/~mccallum/papers/iedatamining-ijcaiws03.pdf), so that by sharing common inference procedures, they can each overcome the weaknesses of the other. For example, data mining run on a partially-filled database can find patterns that provide "top-down" accuracy-improving constraints to information extraction. Information extraction can provide a much richer set of "bottom-up" hypotheses to data mining if the mining is able to handle additional uncertainty information from extraction.
</p>

### Conditional Random Fields for Relational Data, Approximate Inference and Learning

The above unified processing requires large-scala joint inference that cannot be performed exactly. We have been developing various methods of MCMC inference methods and corresponding learning approaches aimed specifically at extremely large relational-data domains. Our approach based on Metropolis-Hastings inference and learning by ranking, achieved [best-in-the-world coreference resolution](http://www.cs.umass.edu/~mccallum/papers/coref-hlt2007.pdf) on a standard newswire dataset. This work is also quite relevant to recent interest in "combining logic and probability".

    
### Automatic Knowledge Base Construction, with Probabilistic Databases & Human Cooperation

Incorporating uncertainty and probabilistic inference into databases has posed many challenges, often leading to systems that sacrifice modeling power, scalability, or restrict the class of relational algebra formulae under which they are closed.  We have proposed [Wick et al, VLDB, 2009] an alternative approach in which the underlying relational database always represents a single possible world, and an external, unrestricted factor graph encodes a distribution over the set of possible worlds; Markov chain Monte Carlo (MCMC) inference is then used to recover this uncertainty to a desired level of fidelity.  Our approach allows the efficient evaluation of arbitrary SQL queries over probabilistic databases with dependencies expressed by unrestricted graphical models, (including graphical model structure that changes during inference).

As a result, state-of-the-art, machine-learning-based information extraction, entity resolution, schema-aligment can then be efficiently run "inside" the database.  Furthermore, rather than running in pipeline fashion, they can all interoperate in the same scalable infrastructure, imparting the increased accuracy of joint inference. This also provides a convenient any-time functionality to KB construction and query processing.

In addition, we advocate an approach to information integration (including knowledge-base construction by human-machine cooperation) in which the the canonical "true" entities and relations in the database are always inferred from integrated or human-entered data, never injected directly.  Even human "corrections" to the KB are merely additional pieces of evidence input as probabilistic evidence---allowing our system to reason probabilistically about provenance and trust.

MCMC sampling provides efficiency by hypothesizing modifications to possible worlds rather than generating entire worlds from scratch.  Queries are then run over the portions of the world that change, avoiding the onerous cost of running full queries over each sampled world.  We leverage materialzed view maintenance techniques to dramatically speed query processing.  We demonstrate system’s ability to answer relational queries with aggregation over one million tuples, and show additional scalability through use of parallelization.


### Extraction, Integration and Mining of Bibliographic Data

Back in the 1997 we conceived of and lead a project at JustResearch that created Cora, one of the first domain-specific search engines over computer science research papers. You can read more about our research on Cora in our IRJ [journal paper](http://www-2.cs.cmu.edu/~mccallum/papers/cora-irj2000.ps.gz) or a [paper](https://people.cs.umass.edu/~mccallum/papers/cora-aaaiss99.ps.gz) presented at the [AAAI'99 Spring Symposium](http://www.aaai.org/Symposia/Spring/1999/sssregistration-99.html). The Cora team also included [Kamal Nigam](http://www.cs.cmu.edu/%7Eknigam), [Kristie Seymore](https://www.linkedin.com/in/kristie-seymore-148a6b/), [Jason Rennie](http://www.ai.mit.edu/%7Ejrennie), [Huan Chang](http://www.informatik.uni-trier.de/%7Eley/db/indices/a-tree/c/Chang:Huan.html) and [Jason Reed](http://www-2.cs.cmu.edu/%7Ejcreed/).

More recently we have been working on an enhanced alternative to [Google Scholar](http://scholar.google.com), [CiteSeer](http://citeseer.ist.psu.edu/), and other digital libraries of the research literature. Our system, called Rexa, automatically extracts a de-duplicated cross-referenced database of not just papers (and references), but also people, grants, publication venues and institutions. We also perform various kinds of [topic](http://www.cs.umass.edu/%7Emccallum/papers/pam-icml06.pdf) and [bibliometric impact](http://www.cs.umass.edu/%7Emccallum/papers/impact-jcdl06.pdf) analysis on this data.


### Social Network Analysis with Structured Topic Models

Traditional social network analysis examines the connectivity of entities in a graph. However, in many cases we have data not just about the existence of a graph-edge, but also various properties of the nodes and edges---including large quantities of corresponding textual data. We have used Bayesian latent variable models, variants of "topic models" augmented with non-textual variables to (a) [discover roles](http://www.cs.umass.edu/%7Emccallum/papers/art-jair07.pdf) of people in the sender-receiver structure of a large email collection, (b) [discover groups](http://www.cs.umass.edu/%7Emccallum/papers/gt-bookch07.pdf) (coalitions) of U.S. senators or U.N. countries from their voting records and the topics of the bills, (c) [discover communities](http://www.cs.ubc.ca/%7Emurphyk/nips07NetworkWorkshop/abstracts/mimno.pdf) of academic researchers from their papers and the venues in which they publish.


### Semi-supervised Learning & Alignment Learning in Natural Language

The only way to put natural language learning into the hands of the people is to reduce the burden of labeling training data. Over the years we have worked on various methods of semi-supervised learning that combines small amounts of labeled data with large amounts of unlabeled data. Our most recent work is in <a href="http://www.cs.umass.edu/%7Emccallum/papers/ge08note.pdf">Generalized Expectation</a> (GE) criteria, one form of which can be understood as enabling "<a href="http://www.cs.umass.edu/%7Emccallum/papers/druck08sigir.pdf">feature labeling</a>" as opposed to the traditional "instance labeling".

We have also removed the need for human labeled data entirely by leveraging information already in relevant databases, and learning information extractors by discovering <a href="http://www.cs.umass.edu/%7Emccallum/papers/crfstredit-uai05.pdf">CRF-based alignments</a> between <a href="http://www.cs.umass.edu/%7Emccallum/papers/bellare-iiweb07.pdf">database records and unstructured text</a>.


### Joint Inference for NLP, Dialog Pragmatics, Perception and Action

As part of a MURI project joint with UPenn, we have begun work on probabilistic modeling of natural language dialog, designing methods that will do joint, unified inference all the way from natural language understanding, through dialog pragmatics, to perception and action in a shared world. This work will leverage our research in large-scale joint inference in CRFs.


### Intelligent Understanding of our Email World

<p>As part of the CALO project, we extracted information about people and other entities appearing in email streams, performed large-scale entity resolution, and discovered topics and expertise.


### Conditional Probability Models for Sequences and other Relational Data

BBack in the 1990's, after having <a href="https://people.cs.umass.edu/~mccallum/papers/ieshrink-aaaiws99.pdf">some</a> <a href="https://pdfs.semanticscholar.org/ed1b/d7435e108b8abba25616bb674affe3672628.pdf">success</a> using hidden Markov models for information extraction, we found ourselves frustrated by their lack of ability to incorporate many arbitrary, overlapping features of the input sequence, such as capitalization, lexicon memberships, spelling features, and conjunctions of such features in a large window of past and future observations. The same difficulties with non-independent features exist in many generatively-trained models historically used in NLP. We have begun work with conditionally-trained probability models that address these problems. <a href="https://people.cs.umass.edu/~mccallum/papers/memm-icml2000.ps">Maximum entropy Markov models</a> are locally-normalized conditional sequence models. Finite-state <a href="https://people.cs.umass.edu/~mccallum/papers/crf-icml01.ps">Conditional Random Fields</a> (CRFs) are globally-normalized models. We have also been working with CRFs for <a href="https://people.cs.umass.edu/~mccallum/papers/condid-ijcaiws2003.pdff">coreference</a> and <a href="https://people.cs.umass.edu/~mccallum/papers/dcrf-nips03.pdf">multi-sequence labeling</a> , analogous to conditionally-trained Dynamic Bayesian Networks (DBNs). We now work with even more complex CRFs, that integrate logic and probability, as described above.

