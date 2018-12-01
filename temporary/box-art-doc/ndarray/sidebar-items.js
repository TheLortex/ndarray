initSidebarItems({"enum":[["ErrorKind","Error code for an error related to array shape or layout."],["FoldWhile","Value controlling the execution of `.fold_while` on `Zip`."],["SliceOrIndex","A slice (range with step) or an index."]],"fn":[["Dim","Create a new dimension value."],["Ix0","Create a zero-dimensional index"],["Ix1","Create a one-dimensional index"],["Ix2","Create a two-dimensional index"],["Ix3","Create a three-dimensional index"],["Ix4","Create a four-dimensional index"],["Ix5","Create a five-dimensional index"],["Ix6","Create a six-dimensional index"],["IxDyn","Create a dynamic-dimensional index"],["arr0","Create a zero-dimensional array with the element `x`."],["arr1","Create a one-dimensional array with elements from `xs`."],["arr2","Create a two-dimensional array with elements from `xs`."],["arr3","Create a three-dimensional array with elements from `xs`."],["aview0","Create a zero-dimensional array view borrowing `x`."],["aview1","Create a one-dimensional array view with elements borrowing `xs`."],["aview2","Create a two-dimensional array view with elements borrowing `xs`."],["aview_mut1","Create a one-dimensional read-write array view with elements borrowing `xs`."],["aview_mut2","Create a two-dimensional read-write array view with elements borrowing `xs`."],["indices","Create an iterable of the array shape `shape`."],["indices_of","Return an iterable of the indices of the passed-in array."],["rcarr1","Create a one-dimensional array with elements from `xs`."],["rcarr2","Create a two-dimensional array with elements from `xs`."],["rcarr3","Create a three-dimensional array with elements from `xs`."],["stack","Stack arrays along the given axis."]],"macro":[["array","Create an `Array` with one, two or three dimensions."],["azip","Array zip macro: lock step function application across several arrays and producers."],["s","Slice argument constructor."],["stack","Stack arrays along the given axis."]],"mod":[["iter","Producers, iterables and iterators."],["linalg","Linear algebra."],["prelude","ndarray prelude."]],"struct":[["ArrayBase","An n-dimensional array."],["Axis","An axis index."],["AxisDescription","Description of the axis, its length and its stride."],["Dim","Dimension description."],["IxDynImpl","Dynamic dimension or index type."],["OwnedArcRepr","ArcArray's representation."],["OwnedRepr","Array's representation."],["RawViewRepr","Array pointer’s representation."],["Shape","A contiguous array shape of n dimensions."],["ShapeError","An error related to array shape or layout."],["Slice","A slice (range with step size)."],["SliceInfo","Represents all of the necessary information to perform a slice."],["StrideShape","An array shape of n dimensions in c-order, f-order or custom strides."],["ViewRepr","Array view’s representation."],["Zip","Lock step function application across several arrays or other producers."]],"trait":[["AsArray","Argument conversion into an array view"],["Data","Array representation trait."],["DataClone","Array representation trait."],["DataMut","Array representation trait."],["DataOwned","Array representation trait."],["DataShared","Array representation trait."],["Dimension","Array shape and index trait."],["FixedInitializer","Fixed-size array used for array initialization"],["IndexLonger","Extra indexing methods for array views"],["IntoDimension","Argument conversion a dimension."],["IntoNdProducer","Argument conversion into a producer."],["LinalgScalar","Elements that support linear algebra operations."],["NdFloat","Floating-point element types `f32` and `f64`."],["NdIndex","Tuple or fixed size arrays that can be used to index an array."],["NdProducer","A producer of an n-dimensional set of elements; for example an array view, mutable array view or an iterator that yields chunks."],["RawData","Array representation trait."],["RawDataClone","Array representation trait."],["RawDataMut","Array representation trait."],["RemoveAxis","Array shape with a next smaller dimension."],["ScalarOperand","Elements that can be used as direct operands in arithmetic with arrays."],["ShapeBuilder","A trait for `Shape` and `D where D: Dimension` that allows customizing the memory layout (strides) of an array shape."]],"type":[["ArcArray","An array where the data has shared ownership and is copy on write."],["Array","An array that owns its data uniquely."],["Array0","zero-dimensional array"],["Array1","one-dimensional array"],["Array2","two-dimensional array"],["Array3","three-dimensional array"],["Array4","four-dimensional array"],["Array5","five-dimensional array"],["Array6","six-dimensional array"],["ArrayD","dynamic-dimensional array"],["ArrayView","A read-only array view."],["ArrayView0","zero-dimensional array view"],["ArrayView1","one-dimensional array view"],["ArrayView2","two-dimensional array view"],["ArrayView3","three-dimensional array view"],["ArrayView4","four-dimensional array view"],["ArrayView5","five-dimensional array view"],["ArrayView6","six-dimensional array view"],["ArrayViewD","dynamic-dimensional array view"],["ArrayViewMut","A read-write array view."],["ArrayViewMut0","zero-dimensional read-write array view"],["ArrayViewMut1","one-dimensional read-write array view"],["ArrayViewMut2","two-dimensional read-write array view"],["ArrayViewMut3","three-dimensional read-write array view"],["ArrayViewMut4","four-dimensional read-write array view"],["ArrayViewMut5","five-dimensional read-write array view"],["ArrayViewMut6","six-dimensional read-write array view"],["ArrayViewMutD","dynamic-dimensional read-write array view"],["Ix","Array index type"],["Ix0","zero-dimensionial"],["Ix1","one-dimensional"],["Ix2","two-dimensional"],["Ix3","three-dimensional"],["Ix4","four-dimensional"],["Ix5","five-dimensional"],["Ix6","six-dimensional"],["IxDyn","dynamic-dimensional"],["Ixs","Array index type (signed)"],["RawArrayView","A read-only array view without a lifetime."],["RawArrayViewMut","A mutable array view without a lifetime."],["RcArray","An array where the data has shared ownership and is copy on write."],["RcArray1","one-dimensional shared ownership array"],["RcArray2","two-dimensional shared ownership array"]]});